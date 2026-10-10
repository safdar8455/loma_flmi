# Security Specification: Admin Approval System

This specification outlines the data invariants, threat model, and "Dirty Dozen" payload sweeps designed to pentest the Firestore security bounds of the LOMA study suite application.

## 1. Data Invariants & Access Control Laws
- **Course Visibility Rule**: Standard Users can ONLY query or get courses where `approved == true`. Any unapproved course document MUST be unreadable by standard users.
- **Admin Privilege Rule**: Authenticated admins (`/users/{userId}` has `role == "admin"`) can read, create, update, and toggle approval status on any course document.
- **Self-Promotion Limit Rule**: Users cannot modify their own `role` field from `"user"` to `"admin"` or set themselves as admins on creation without administrative consensus.

## 2. The "Dirty Dozen" Malicious Payloads

We test the security boundaries by trying to execute unauthorized mutations or queries. The following 12 payloads must always return `PERMISSION_DENIED`:

### Payload 1: Student reads unapproved course metadata directly
- **Path**: `/courses/loma290` (where `approved == false`)
- **Action**: Get (Read) by a regular student UID `student_99`
- **Result**: `PERMISSION_DENIED`

### Payload 2: Student attempts to update course approval field
- **Path**: `/courses/loma290`
- **Action**: Update `approved` to `true` by a regular student UID `student_99`
- **Result**: `PERMISSION_DENIED`

### Payload 3: Student attempts to self-escalate role during user profile registration
- **Path**: `/users/student_99`
- **Action**: Create user profile with `role: "admin"` by UID `student_99`
- **Result**: `PERMISSION_DENIED` or ignored/blocked by strict keys size check unless admin authorization is validated.

### Payload 4: Student attempts to hijack someone else's profile
- **Path**: `/users/admin_user`
- **Action**: Update/Set by UID `student_99`
- **Result**: `PERMISSION_DENIED`

### Payload 5: Student attempts to bypass list validation to scrape all courses (approved and unapproved)
- **Path**: `/courses`
- **Action**: Querying all courses without filtering by `approved == true`
- **Result**: `PERMISSION_DENIED` (enforced by secure list query rule)

### Payload 6: Unauthenticated browser guest attempts to read any user profile
- **Path**: `/users/admin_user`
- **Action**: Get (Read) by unauthenticated guest
- **Result**: `PERMISSION_DENIED`

### Payload 7: Student attempts to submit random results for someone else's assessment
- **Path**: `/assessments/record_017`
- **Action**: Creating assessment with `userId == 'admin_user'`
- **Result**: `PERMISSION_DENIED`

### Payload 8: Student attempts to create a new course structure
- **Path**: `/courses/custom_flmi_999`
- **Action**: Create course with `approved: true` by regular student UID `student_99`
- **Result**: `PERMISSION_DENIED`

### Payload 9: Student attempts to inject a 10MB string into the Course ID parameter
- **Path**: `/courses/VERY_LONG_STRING_THAT_COULD_EXHAUST_PROJECT_QUOTA_AND_CAUSE_DENIAL_OF_WALLET`
- **Action**: Put (Create) with invalid ID structure
- **Result**: `PERMISSION_DENIED`

### Payload 10: User attempts to modify the `createdAt` timestamp of a course approvals node which should be immortal
- **Path**: `/courses/loma280`
- **Action**: Update `createdAt` to a spoofed timestamp
- **Result**: `PERMISSION_DENIED`

### Payload 11: User attempts to change another user's role to student or administrator
- **Path**: `/users/admin_user`
- **Action**: Update `role` field of another UID by a non-admin
- **Result**: `PERMISSION_DENIED`

### Payload 12: Admin attempts to update course parameters.
- **Path**: `/courses/loma280`
- **Action**: True Admin changes `approved` from `true` to `false`
- **Result**: `SUCCESS` (Verifies administrative capability is intact)

---

## 3. Test Structure Validation
To verify these, our Firestore Security Rules are implemented using clean `isValidId`, `isAdmin`, and `incoming` helper assertions, which handle strict key constraints and state checking.
