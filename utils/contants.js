module.exports = {
  USER_FIELDS_REGULAR: [
    'firstName',
    'lastName',
    'info',
    'email',
    'DoB',
    'avatar',
    'avatarThumbnail',
    'phone',
    'slack_name',
    'repo'
  ],

  USER_FIELDS_TOKEN: ['id', 'firstName', 'lastName', 'role', 'status'],

  USER_FIELDS_ADMIN: ['role', 'status'],

  USER_FIELDS_QUERY_EXCLUDES: [
    'password',
    'updatedAt',
    'resetPasswordToken',
    'resetPasswordExpires',
    'slack_conversational_id',
    'slack_conversational_crm_id'
  ]
};
