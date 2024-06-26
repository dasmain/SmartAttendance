//const BASE_URL = "http://ec2-13-210-17-40.ap-southeast-2.compute.amazonaws.com/api/v1/";
//const BASE_URL = "https://3.106.228.196/api/v1/";
//const BASE_URL = "https://13.211.10.201/api/v1/";
//const BASE_URL = "http://3.24.90.211/api/v1/";
// const BASE_URL = "https://api.cluebycandlelight.com/api/v1/";
const BASE_URL = "http://localhost:3000/api/v1/";

const parentApiConstants = {
  SIGN_IN: `${BASE_URL}parent/sign-in`,
  SIGN_OUT: `${BASE_URL}parent/sign-out`,
  FORGOT_PASS: `${BASE_URL}parent/forgot-password`,
  VALIDATE_TOKEN:`${BASE_URL}parent/validate-reset-pass-token`,
  RESET_PASS:`${BASE_URL}parent/reset-password`,
  CHANGE_PASSWORD:`${BASE_URL}parent/update/password`,
  GET_PARENT_DETAILS:`${BASE_URL}parent/details`,


  CHANGE_USERNAME: `${BASE_URL}admin/change-username`,
  RESET_PASS_1: `${BASE_URL}admin/reset-password-step-1`,
  RESET_PASS_2: `${BASE_URL}admin/reset-password-step-2?email=`,
  RESET_PASS_3: `${BASE_URL}admin/reset-password-step-3?email=`,
  LIST_ADMINS: `${BASE_URL}admin/list-admin`,
  DELETE_ADMIN: `${BASE_URL}admin/delete-admin?email=`,
  CREATE_COMP: `${BASE_URL}admin/create-competitions`,
  GET_COLLECTION: `${BASE_URL}admin/list-competitions`,
  GET_COLLECTION_BY_ID: `${BASE_URL}admin/get-competition?id=`,
  MOVE_ARCHIVE: `${BASE_URL}admin/move-to-archive?book_id=`,
  LIST_ARCHIVE: `${BASE_URL}admin/list-archive`,
  RESTORE_ARCHIVE: `${BASE_URL}admin/restore-from-archive?book_id=`,
  DELETE_ARCHIVE: `${BASE_URL}admin/permanent-delete?book_id=`,
  UPDATE_COMP: `${BASE_URL}admin/edit-competition?id=`,
  ADD_CONT: `${BASE_URL}admin/create-contribution`,
  ADD_CONT_FROM_ACC: `${BASE_URL}admin/add-contributor`,
  REMOVE_CONT_FROM_ACC: `${BASE_URL}admin/remove-contributor`,
  GET_ALL_USERS: `${BASE_URL}admin/get-website-users`,
  GET_CONT_ID: `${BASE_URL}admin/list-contribution-by-bookid?book_id=`,
  UPDATE_CONT: `${BASE_URL}admin/update-contribution?contribution_id=`,
  DELETE_CONT: `${BASE_URL}admin/delete-contribution?contribution_id=`,
  LIST_ENTRIES: `${BASE_URL}admin/list-entry-by-bookid?book_id=`,
  PUT_WINNER: `${BASE_URL}admin/select-winner`,
  GET_RANDOM_WINNER: `${BASE_URL}admin/generate-random-winners?book_id=`,
  GET_WINNER_BY_ID: `${BASE_URL}admin/list-winner-by-bookid?book_id=`,
  GET_SALES: `${BASE_URL}admin/get-sales-by-bookid?book_id=`,
  DELETE_WINNER: `${BASE_URL}admin/delete-winners?book_id=`,
  GET_WINNER: `${BASE_URL}admin/list-winner-by-bookid?book_id=`,
  PROMO_CODE: `${BASE_URL}admin/promo-code/create?book_id=`,
  UPDATE_PROMO_CODE: `${BASE_URL}admin/promo-code/edit?promo_id=`,
  DELETE_PROMO_CODE: `${BASE_URL}admin/promo-code/delete?promo_id=`,
  GET_PROMO_CODE: `${BASE_URL}admin/promo-code/list-all?book_id=`,
  GET_SALES_BY_ID: `${BASE_URL}admin/get-sales-by-bookid?book_id=`,
  FOOTER: `${BASE_URL}admin/footer`,
  GET_EMAIL_SUBS: `${BASE_URL}admin/get-email-subscribers`,
  SEND_MAIL: `${BASE_URL}admin/send-mail`,
  UNSUBSCRIBE_MAIL: `${BASE_URL}admin/unsubscribe?email=`,
  GET_WEB_USERS: `${BASE_URL}admin/get-website-users`,
  GET_USERS_LIST: `${BASE_URL}admin/get-users-list`,
  GET_USERS_ACTIVITY: `${BASE_URL}admin/get-users-activity?user_id=`,
  LIST_CONT: `${BASE_URL}admin/list-contribution`,
  LIST_COMP_NAMES: `${BASE_URL}admin/list-competition-names`,
  EXPORT_EMAIL_SUBS: `${BASE_URL}admin/export-email-subscribers`,
  EXPORT_LIST_ENTRY_BY_ID: `${BASE_URL}admin/export-list-entry-by-bookid?book_id=`,
  EXPORT_SALES_LIST_BY_ID: `${BASE_URL}admin/export-sales-list-by-bookid?book_id=`,
  EXPORT_USERS: `${BASE_URL}admin/export-users`,
  EXPORT_CONT: `${BASE_URL}admin/export-as-contributor-and-book-id?book_id=`,
  DISABLE_USER: `${BASE_URL}admin/disable-user?email=`,
};

export default parentApiConstants;