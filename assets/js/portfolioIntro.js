let header = document.querySelector('#intro');
let anim = 
[
    { t: " ", ms: 150 },
    { t: "_", ms: 150 },
    { t: " ", ms: 150 },
    { t: "_", ms: 150 },
    { t: "G_", ms: 75 },
    { t: "Go_", ms: 75 },
    { t: "Goa_", ms: 75 },
    { t: "Goat_", ms: 75 },
    { t: "GoatB_", ms: 75 },
    { t: "GoatBa_", ms: 75 },
    { t: "GoatBan_", ms: 75 },
    { t: "GoatBand_", ms: 75 },
    { t: "GoatBandi_", ms: 75 },
    { t: "GoatBandit_", ms: 400 },
    { t: "GoatBandit ", ms: 400 },
    { t: "GoatBandit_", ms: 400 },
    { t: "GoatBandit ", ms: 400 },
];

let stepDenominator = 1;
if (window.localStorage.stepDenominator)
{
    stepDenominator = window.localStorage.stepDenominator;
}

let i = 0;
let update = () => 
{
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
    {
        setTimeout(update, step.ms / stepDenominator);
    }
    else 
    {
        header.classList.add('top');
        setTimeout(() => 
        {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        
        window.localStorage.stepDenominator = 2;
    }
}
update();