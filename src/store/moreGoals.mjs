import players from '../local/players.json';

const clone = [...players];

const moreGoals = (season) => {
    if(!clone.filter(x => x.seasons.find(x => x.id == season)))
        return [];
    let aux = clone.sort((a, b) => {
        if (a.seasons.find(x => x.id == season).g > b.seasons.find(x => x.id == season).g) {
          return -1;
        }
        if (a.seasons.find(x => x.id == season).g < b.seasons.find(x => x.id == season).g) {
          return 1;
        }
        else {
            if (a.seasons.find(x => x.id == season).gp < b.seasons.find(x => x.id == season).gp) {
                return -1;
            }
            if (a.seasons.find(x => x.id == season).gp > b.seasons.find(x => x.id == season).gp) {
                return 1;
            }
            else {
                if (a.seasons.find(x => x.id == season).mvp > b.seasons.find(x => x.id == season).mvp) {
                    return -1;
                }
                if (a.seasons.find(x => x.id == season).mvp > b.seasons.find(x => x.id == season).mvp) {
                    return 1;
                }
                else
                    return 0;
            }
        }
    })
    return [{img : aux[0].img, n : aux[0].n, nickname : aux[0].nickname, gp : aux[0].seasons.find(x => x.id == season).gp, g : aux[0].seasons.find(x => x.id == season).g},
            {img : aux[1].img, n : aux[1].n, nickname : aux[1].nickname, gp : aux[1].seasons.find(x => x.id == season).gp, g : aux[1].seasons.find(x => x.id == season).g},
            {img : aux[2].img, n : aux[2].n, nickname : aux[2].nickname, gp : aux[2].seasons.find(x => x.id == season).gp, g : aux[2].seasons.find(x => x.id == season).g},];
}

export default moreGoals;