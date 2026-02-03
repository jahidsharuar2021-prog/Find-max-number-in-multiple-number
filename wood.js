function wood(chairquantity,tablequeantity,bedquantity){
    const perchair=50;
    const pertable=60;
    const perbed=70;

    const chairwood=perchair*chairquantity;
    const tablewood=pertable*tablequeantity;
    const bedwood=perbed*bedquantity;
    const totalwood=chairwood+tablewood+bedwood;
    return totalwood;
}
const neededwood=wood(1,0,5);
console.log('needed wood for furniture=' ,neededwood);