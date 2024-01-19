export const NOT_SIGNED_IN_USER_USER_ID = -Math.floor(Math.random() * 1000000000); // initialise with a negative number to avoid collision with signed in user ids which are positive. Randomness done so that it is unlikely to collide with another non-signed in user id and make mp tracking from logs easier
export const NOT_SIGNED_IN_USER_USER_EMAIL = "notSignedIn@coditioning.com";
export const EMAIL_TO_USER_ID_MAPPING: string = 'emailToUserIdMapping';
/*
Custom learning path
*/
export const LEARNING_PATH_COURSE_ID: number = 1;
export const LEARNING_PATH_MODULE_ID: number = 0;
export const LEARNING_PATH_SUBMODULE_ID: number = 0;


/*
Dimensions
*/
export const DEFAULT_CONTENT_CONTAINER_MIN_HEIGHT_IN_PX = 500;
export const DEFAULT_CONTENT_CONTAINER_MAX_HEIGHT_IN_PX = 700;

export const CAREERS_PAGE_PATH = "/careers";
export const CONTACT_PAGE_PATH = "/contact";
export const ABOUT_PAGE_PATH = "/about";
export const TERMS_PAGE_PATH = "/terms";
export const PRIVACY_PAGE_PATH = "/privacy";
export const DASHBOARD_PAGE_PATH = "/app/dashboard";
export const LEARNING_PAGE_PATH = "/app/learning";
export const CV_SERVICES_PAGE_PATH = "/app/cv-services";
export const SIGN_UP_PAGE_PATH = "/signup";
export const SIGN_IN_PAGE_PATH = "/signin";
export const BLOG_PAGE_PATH = "/blog";
export const LEARNING_PATH_GENERATOR_PATH = "/app/learningPathGenerator";
export const LEARNING_PATH_PATH = "/app/learningPath";
export const LANDING_PAGE_UPON_SIGN_IN_PATH = LEARNING_PAGE_PATH;
export const INTERVIEW_SELECTION_PAGE_PATH = "/app/interviewSelection";

export const DISCORD_URL = "https://discord.gg/eNYYvpRyBt";

/*Navigation url param tags*/
export enum NavigationUrlParamTags {
  SIGN_UP_COMPONENT = "signUp",
}


/*
Constants
*/
export const SUPPORT_CONTACT_EMAIL = "coditioning@outlook.com";


//NEBUG: MVP CODE NEEDS REFACTORING
export const DONE_CODING_BUTTON_TEXT = "Done coding";
export const SKIP_BUTTON_TEXT = "Skip question";
export const REVEAL_ANSWERS_BUTTON_TEXT = "Reveal answers";



export enum Environment {
  LOCAL_DEV = 'local_development',
  DEV = 'development',
  UAT = 'uat',
  PROD = 'production',
}