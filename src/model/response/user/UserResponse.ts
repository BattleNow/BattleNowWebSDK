export interface Userprofile {
  nickname: string;
  personalize: string;
  avatar: string;
  phone?: any;
  verify_by_email: boolean;
  verify_by_phone: boolean;
}

export interface UserResponse {
  id: number;
  username: string;
  userprofile: Userprofile;
  email: string;
}



