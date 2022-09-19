export type IGame = {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

class Game {
  readonly id: string;
  readonly title: string;
  readonly bannerUrl: string;
  readonly adsCount: number;

  constructor({ id, title, bannerUrl, _count }: IGame) {
    this.id = id;
    this.title = title;
    this.bannerUrl = bannerUrl;
    this.adsCount = _count.ads;
  }
}

export { Game };
