function heroAdjust(){
    const container = document.getElementsByTagName('nav')[0].offsetWidth;
    const hero = document.getElementById('hero');
    const sobre = document.getElementById('sobre');
    if(container > 805){
        hero.style.height = 'calc(100vh - '+sobre.offsetHeight+'px)';
    }else{
        var mobile = sobre.offsetHeight - 210;
        hero.style.height = 'calc(100vh - '+mobile+'px)';
    }

    if(container > 805){
        var contain = parseFloat((container - (container * 90 / 100)) / 2);
        document.getElementById('portf_cntr').style.margin = '0 '+contain+'px';
        document.getElementById('portf_cntr').style.float = 'left';
    }else{
        document.getElementById('portf_cntr').style.margin = '0px';
        document.getElementById('portf_cntr').style.float = 'right';
    }

    const skill0 = document.getElementById('skll0');
    const skill1 = document.getElementById('skll1');
    const skill2 = document.getElementById('skll2');
    const skill3 = document.getElementById('skll3');
    const skill4 = document.getElementById('skll4');
    const skill5 = document.getElementById('skll5');
    const skill6 = document.getElementById('skll6');
    const skill7 = document.getElementById('skll7');

    const yr = 2021;
    const p = ' Anos de experiência';

    skll0.innerHTML = yr - 2005+p;
    skll1.innerHTML = yr - 2005+p;
    skll2.innerHTML = yr - 2006+p;
    skll3.innerHTML = yr - 2008+p;
    skll4.innerHTML = yr - 2008+p;
    skll5.innerHTML = yr - 2010+p;
    skll6.innerHTML = yr - 2011+p;
    skll7.innerHTML = '+'+(yr - 2009)+p;

    const copy = document.getElementById('copy');
    copy.innerHTML = '2008 - '+yr+' &copy; Johny KLG';
}