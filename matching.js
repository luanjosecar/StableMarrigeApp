


function matchingAlgorith(jsonResponse1, jsonResponse2){

};

var females = {
    'female1' : {
        'male1':1,
        'male2':2,
        'male3':3
    },
    'female2':{
        'male3':1,
        'male1':2,
        'male2':3
    },
    'female3':{
        'male1':1,
        'male3':2,
        'male2':3
    }
};

var males = {
    'male1' : {
        'female1':1,
        'female3':2,
        'female2':3
    },
    'male2':{
        'female2':1,
        'female1':2,
        'female3':3
    },
    'male3':{
        'female1':1,
        'female3':2,
        'female2':3
    } 
};

const N = 4;

var malesObj = Object.getOwnPropertyNames(males);
var femObj = Object.getOwnPropertyNames(females);

//----------------------------------------------------------------------------

function wPrefersM1OverM(prefer, w, m, m1){
    var item;
    for ( item in N){

        if(prefer[w][i] === m1){
            return true;
        }
        if(prefer[w][i]===m){
            return false;
        }
    }
}
// --------------------------------------------------------------------------



var prefer = [[7, 5, 6, 4], [5, 4, 6, 7], 
    [4, 5, 6, 7], [4, 5, 6, 7], 
    [0, 1, 2, 3], [0, 1, 2, 3], 
    [0, 1, 2, 3], [0, 1, 2, 3]] ;


// Define as posições para os parceiros 
var fPartner = new Array(N).fill(-1);

// Verificação para parceiros livres
var freePart = new Array(N).fill(false);

var numOfFreePartner = N;

while(numOfFreePartner > 0){
    // Verifica qual dos homens ainda está livre
    var m = 0;
    while(m<N){
        if(freePart[m] === false){
            break;
           }
        m++;
    }

    var i = 0;
    while(i<N && freePart[m] === false){

        w = prefer[m][i];
        console.log(w);
        if( fPartner[w-N]=== -1){
            fPartner[w-N] = m;
            freePart[m] = true;
            numOfFreePartner--;
        }
        else{
            m1 = fPartner[w-N];

            if (wPrefersM1OverM(prefer, w, m, m1) === false){
            wPartner[w - N] = m 
            mFree[m] = True
            mFree[m1] = False
            }
        }

        i++;

    }
}

console.log(fPartner);





