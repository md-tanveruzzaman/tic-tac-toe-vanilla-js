var 
divs = ['firstSquare', 'secondSquare', 'thirdSquare', 'fourthSquare', 'fifthSquare', 'sixthSquare', 'seventhSquare', 'eighthSquare', 'ninthSquare'],
isCross = true,
crossPath = '<img src="./assets/images/cross.png">',
circlePath = '<img src="./assets/images/circle.png">',
crossContainer = [],
circleContainer = [],
matchingCombination = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

loadCrossOrCircle = function (e) {
    var elem = e.target;
    if (elem.tagName == 'DIV') {
        elem.innerHTML = isCross ? crossPath : circlePath;
        assignPosition(elem.id);
        checkMatch(isCross, isCross ? crossContainer : circleContainer);
        isCross = !isCross;
    }
}

window.onload = function () {
    divs.forEach(div => {
        var elem = document.getElementById(div);
        if (elem) {
            elem.addEventListener('click', loadCrossOrCircle, false);
        }
    });
}

function assignPosition(id) {
    let position = positionFromId(id);
    isCross ? crossContainer.push(position) : circleContainer.push(position);
}

function checkMatch(is_cross, current_track) {
    var currentSorted = current_track.slice().sort();
    var isMatched;
    matchingCombination.forEach(arr => {
        var arrayToMatch = arr.slice().sort();
        if (arrayToMatch.length === currentSorted.length) {
            isMatched = arrayToMatch.every(function(value, index) {
                return value === currentSorted[index];
            });
            console.log(isMatched, is_cross ? 'cross' : 'circle');
            if (isMatched) {
                alert(`${is_cross ? 'CROSS' : 'CIRCLE'} WINS!!!!`);
                restart();
            }
        }
    });
}

function restart() {
    isCross = true;
    divs.forEach(div => {
        var elem = document.getElementById(div);
        if (elem) {
            elem.innerHTML = '';
            crossContainer = [];
            circleContainer = [];
        }
    })
}

function positionFromId(uiId) {
    var position;
    switch (uiId) {
        case 'firstSquare':
            position = 1;
            break;
        case 'secondSquare':
            position = 2;
            break;

        case 'thirdSquare':
            position = 3;
            break;

        case 'fourthSquare':
            position = 4;
            break;

        case 'fifthSquare':
            position = 5;
            break;

        case 'sixthSquare':
            position = 6;
            break;

        case 'seventhSquare':
            position = 7;
            break;

        case 'eighthSquare':
            position = 8;
            break;

        case 'ninthSquare':
            position = 9;
            break;
    }

    return position;
}
