module.exports = {
	LOGIN: {
    INVALID_USERNAME_LENGTH: {
    	error_code: 10001,
    	error_msg: 'Invalid username length.'
    },
    INVALID_PASSWORD_LENGTH: {
    	error_code: 10002,
    	error_msg: 'Invalid password length.'
    },
    USERNAME_NOT_EXIST: {
    	error_code: 10003,
    	error_msg: 'Username is not exist in database.'
    },
    PASSWORD_ERROR: {
    	error_code: 10004,
    	error_msg: 'Password doesn\'t matched with the username.'
    },
    INVALID_OPERATION: {
    	error_code: 10005,
    	error_msg: 'Invalid operation.'
    },
    NOT_LOGIN_STATUS: {
      error_code: 10006,
      error_msg: 'It is not loged status.'
    },
    LOGIN_STATUS: {
      error_code: 10007,
      error_msg: 'It is loged status.'
    },
    LOGOUT_SUCCESS: {
      error_code: 0,
      error_msg: 'Logout is ok.'
    },
    SUCCESS: {
    	error_code: 0,
    	error_msg: 'Login is ok.'
    }
	},
  API: {
    RETURN_SUCCESS: {
      error_code: 0,
      error_msg: 'Data is returned successfully.'
    },
    RETURN_FAILED: {
      error_code: 20001,
      error_msg: 'It is failed to return data.'
    },
    CHANGE_COURSE_FIELD_SUCCESS: {
      error_code: 0,
      error_msg: 'Changing course field successfully.'
    },
    CHANGE_COURSE_FIELD_FAILED: {
      error_code: 20002,
      error_msg: 'It is failed to change course field.'
    },
    CHANGE_STATUS_SUCCESS: {
      error_code: 0,
      error_msg: 'Changing status successfully.'
    },
    CHANGE_STATUS_FAILED: {
      error_code: 20003,
      error_msg: 'It is failed to change status.'
    },
    FIELD_ERROR: {
      error_code: 20004,
      error_msg: 'It is a wrong field for the operation.'
    },
    SELECT_STAR_TEACHER_SUCCESS: {
      error_code: 0,
      error_msg: 'Selecting star teacher successfully.'
    },
    SELECT_STAR_TEACHER_FAILED: {
      error_code: 20005,
      error_msg: 'It is failed to select star teacher.'
    }
  },
  CRAWLER: {
    CRAWL_SUCCESS: {
      error_code: 0,
      error_msg: 'Crawling data successfully'
    },
    CRAWL_FAILED: {
      error_code: 30001,
      error_msg: 'It is failed to crawl data'
    }
  }
}







