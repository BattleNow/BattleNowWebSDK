declare namespace challenge {

  export interface Userprofile {
    nickname: string;
    personalize: string;
    avatar: string;
    phone?: any;
    verify_by_email: boolean;
    verify_by_phone: boolean;
  }

  export interface Initiator {
    id: number;
    username: string;
    userprofile: Userprofile;
    email: string;
  }

  export interface ChallengePlayer {
    id: number;
    user?: number;
    group?: number;
  }


  export interface Game {
    id: number;
    name: string;
    game_series_id: number;
    cover: string;
    icon: string;
  }

  export interface Type {
    id: number;
    name: string;
    game: Game;
    game_id: number;
  }

  export interface ChallengeResult {
    id: number;
    initiator: Initiator;
    challenger: ChallengePlayer;
    rival: ChallengePlayer;
    title: string;
    type: Type;
    content: string;
    time: string;
    status: number;
    enable: boolean;
    live_url: string;
    create_at: string;
    update_at: string;
    views: number;
  }
}
