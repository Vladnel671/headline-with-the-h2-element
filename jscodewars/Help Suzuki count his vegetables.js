function countVegetables(string) {
    let cabbage = 0;
    let carrot = 0;
    let celery = 0;
    let cucumber = 0;
    let mushroom = 0;
    let onion = 0;
    let pepper = 0;
    let potato = 0;
    let tofu = 0;
    let turnip = 0;

    const vegetables = string.split(" ");
    vegetables.forEach(vegetable => {
        switch (vegetable) {
            case "cabbage":
                cabbage++;
                break;
            case "carrot":
                carrot++;
                break;
            case "celery":
                celery++;
                break;
            case "cucumber":
                cucumber++;
                break;
            case "mushroom":
                mushroom++;
                break;
            case "onion":
                onion++;
                break;
            case "pepper":
                pepper++;
                break;
            case "potato":
                potato++;
                break;
            case "tofu":
                tofu++;
                break;
            case "turnip":
                turnip++;
                break;
            default:
                break;
        }
    });

    const resultArr = [
        [tofu, 'tofu'],
        [potato, 'potato'],
        [cucumber, 'cucumber'],
        [cabbage, 'cabbage'],
        [turnip, 'turnip'],
        [pepper, 'pepper'],
        [onion, 'onion'],
        [mushroom, 'mushroom'],
        [celery, 'celery'],
        [carrot, 'carrot']
    ];

    return resultArr
        .filter(([count]) => count > 0)
        .sort(([countA, nameA], [countB, nameB]) => {
            if (countA !== countB) {
                return countB - countA;
            } else {
                return nameB.localeCompare(nameA);
            }
        });
}