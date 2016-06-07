"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var algorithm_1 = require('./algorithm');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'assistant';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>{{title}}</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var ALGORITHMS = [
    { "type": algorithm_1.AlgorithmType.Oll, "name": "28", "imageFileName": "oll28.gif", "moves": "(M' U M) U2 (M' U M)", "comments": "The middle slices should be done with the left ring finger for M' and the left thumb for M. The (M' U M) group may take some getting used to." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "57", "imageFileName": "oll57.gif", "moves": "(R U R' U') (M' U R U') Rw'", "comments": "There's nothing too fancy here. The finger tricks used are pretty common. I do the slice turn as M' now because I think it's a little faster that way." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "20", "imageFileName": "oll20.gif", "moves": "Rw' (R U) (R U R' U' Rw2) (R2' U) (R U') Rw'", "comments": "Here, I use the slice as (Rw' R) because it flows a little nicer. This is the least common OLL case (1/216). The finger tricks here are pretty simple." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "23", "imageFileName": "oll23.gif", "moves": "(R2' D) (R' U2) (R D') (R' U2 R')", "comments": "This is one of the most awkward OLLs with all correctly flipped edges. It's still pretty fast, though." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "24", "imageFileName": "oll24.gif", "moves": "(Rw U) (R' U') (Rw' F) (R F')", "comments": "Custom." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "25", "imageFileName": "oll25.gif", "moves": "F' (Rw U R' U') (Rw' F R)", "comments": "Custom. Super fast." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "27", "imageFileName": "oll27.gif", "moves": "(R U R' U) (R U2 R')", "comments": "This is the Sune. Your right hand should never come off of the cube during the execution at any time." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "26", "imageFileName": "oll26.gif", "moves": "(R U2) (R' U' R U' R')", "comments": "This is just the inverse of the Sune, called the Antisune." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "22", "imageFileName": "oll22.gif", "moves": "(R U2') (R2' U') (R2 U') (R2' U2' R)", "comments": "The execution of this algorithm is pretty neat. The R2 turns should alternate in direction so that they can be performed by the right hand without letting go of the cube. The left hand holds the cube and makes the U' turns." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "21", "imageFileName": "oll21.gif", "moves": "L' U' L U' L' U L U' L' U2 L", "comments": "Custom. Double sune (or anti-sune, I can never remember) with the left hand." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "3", "imageFileName": "oll03.gif", "moves": "Fw (R U R' U') Fw' U' F (R U R' U') F'", "comments": "This is a clever combination of the two six move OLLs." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "4", "imageFileName": "oll04.gif", "moves": "Fw (R U R' U') Fw' U F (R U R' U') F'", "comments": "This is another combination of the two six move OLLs." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "17", "imageFileName": "oll17.gif", "moves": "(R U R' U) (R' F R F') U2 (R' F R F')", "comments": "This one is very fast. Each of the three triggers should be lightning fast." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "19", "imageFileName": "oll19.gif", "moves": "Rw' (R U) (R U R' U' Rw) x (R2' U) (R U')", "comments": "This alg is the same as the &quot;X&quot; orientation (#20) except with a slight modification." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "18", "imageFileName": "oll18.gif", "moves": "F (R U R' U) y' (R' U2) (R' F R F')", "comments": "This case has a couple of fast triggers in it." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "2", "imageFileName": "oll02.gif", "moves": "F (R U R' U') S (R U R' U') Fw'", "comments": "This algorithm is just the easy T-orientation followed by the easy P-orientation.The S can take a little getting used to." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "1", "imageFileName": "oll01.gif", "moves": "(R U2) (R2' F R F') U2' (R' F R F')", "comments": "This is just (R U2 R') followed by a couple of sledgehammers." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "33", "imageFileName": "oll33.gif", "moves": "(R U R' U') (R' F R F')", "comments": "This orientation makes up the second half of the Y-permutation. Both triggers are lightning fast, so this should easily be sub-1 second." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "45", "imageFileName": "oll45.gif", "moves": "F (R U R' U') F'", "comments": "This is the quickest and shortest OLL case. I use the left index for the U' and the right thumb for the F'." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "44", "imageFileName": "oll44.gif", "moves": "Fw (R U R' U') Fw'", "comments": "This is very similar to the easy T orientation (#45) except with a double layer turn instead of just F. It is helpful to know the inverse to avoid a U2 before the alg." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "43", "imageFileName": "oll43.gif", "moves": "Fw' (L' U' L U) Fw", "comments": "This is just the mirror of OLL #44. I also recommend being able to perform this alg from a U2." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "32", "imageFileName": "oll32.gif", "moves": "(R Dw) (L' Dw') (R' U) (Lw U Lw')", "comments": "There should be a nice balance between both hands in performing this algorithm." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "31", "imageFileName": "oll31.gif", "moves": "(R' U') F (U R U' R') F R", "comments": "This is just the mirror of OLL #32, but I don't perform it as such. Instead, I do an algorithm that contains the inverse of the easy T orienation in it." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "38", "imageFileName": "oll38.gif", "moves": "(R U R' U) (R U' R' U') (R' F R F')", "comments": "There's nothing difficult about any of these three triggers." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "36", "imageFileName": "oll36.gif", "moves": "(L' U' L U') (L' U L U) (L F' L' F)", "comments": "This is just the mirror of OLL #38. You could also do U2 and perform a right handed version of this algorithm." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "54", "imageFileName": "oll54.gif", "moves": "(Rw U) (R' U) (R U') (R' U) (R U2' Rw')", "comments": "The left hand only holds the cube while the right does everything else. This is sort of like a fat double Sune." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "53", "imageFileName": "oll53.gif", "moves": "(Rw' U') (R U') (R' U) (R U') (R' U2 Rw)", "comments": "This is similar to OLL #54, but the first U' is done with the left index finger." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "50", "imageFileName": "oll50.gif", "moves": "(R B' R B R2') U2 (F R' F' R)", "comments": "Use the right hand to do the first set of moves all in one motion. The second trigger should be very fast." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "49", "imageFileName": "oll49.gif", "moves": "(R' F R' F' R2) U2 y (R' F R F')", "comments": "This algorithm is very similar to OLL #50 with an added cube rotation to make the second trigger easier to perform." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "48", "imageFileName": "oll48.gif", "moves": "F (R U R' U') (R U R' U') F'", "comments": "This is just the easy T-orientation performed twice in a row." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "47", "imageFileName": "oll47.gif", "moves": "F' (L' U' L U) (L' U' L U) F", "comments": "This is just the mirror of OLL #48." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "39", "imageFileName": "oll39.gif", "moves": "(L F') (L' U' L U) F U' L'", "comments": "The right thumb gets a lot of work done at the end of this algorithm.The first trigger can be a little tricky if you don't grip the cube properly. The end can be a bit tricky, too." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "40", "imageFileName": "oll40.gif", "moves": "(R' F) (R U R' U') F' U R", "comments": "This is just the mirror of OLL #39." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "34", "imageFileName": "oll34.gif", "moves": "(R U R2' U') (R' F) (R U) (R U') F'", "comments": "This case is fast. It takes a little while to get used to the R2' not being just R', but the algorithm flows very nicely. I make the last F' turn with my right index finger." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "46", "imageFileName": "oll46.gif", "moves": "(R' U') (R' F R F') (U R)", "comments": "There's nothing fancy here. This is just a sledgehammer with a setup move." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "5", "imageFileName": "oll05.gif", "moves": "(Rw' U2) (R U R' U Rw)", "comments": "This is just a fat Antisune performed from the back of the cube." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "6", "imageFileName": "oll06.gif", "moves": "(Rw U2) (R' U' R U' Rw')", "comments": "This is just a fat Antisune." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "7", "imageFileName": "oll07.gif", "moves": "(Rw U R' U) (R U2 Rw')", "comments": "This case is just the inverse of one of the squares (OLL #6)." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "12", "imageFileName": "oll12.gif", "moves": "(M U2) (R' U' R U') (R' U2 R) U M'", "comments": "This is just a Sune from the back right except with a setup move." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "8", "imageFileName": "oll08.gif", "moves": "(Rw' U' R U') (R' U2 Rw)", "comments": "Like OLL #7, this is just the inverse of one of the squares (OLL #5)." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "11", "imageFileName": "oll11.gif", "moves": "Rw' (R2 U R' U R U2 R') U M'", "comments": "Like OLL #12, this is just a Sune with a setup move." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "37", "imageFileName": "oll37.gif", "moves": "F (R U') (R' U' R U) (R' F')", "comments": "This is one of the fastest orientations. It's the first half of the Y-permutation. The last six moves are EXTREMELY FAST." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "35", "imageFileName": "oll35.gif", "moves": "(R U2) (R2 F) (R F' R U2 R')", "comments": "This is just the sledgehammer with a setup move." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "10", "imageFileName": "oll10.gif", "moves": "(R U R' U) (R' F R F') (R U2 R')", "comments": "This is kind of like a Sune with a sledgehammer mixed in." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "9", "imageFileName": "oll09.gif", "moves": "(R U R' U' R' F) (R2 U R' U' F')", "comments": "This is a pretty fast algorithm that flows very nicely." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "51", "imageFileName": "oll51.gif", "moves": "Fw (R U R' U') (R U R' U') Fw'", "comments": "This is just the easy P-orientation repeated twice." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "52", "imageFileName": "oll52.gif", "moves": "(R U R' U R Dw') (R U' R' F')", "comments": "The Dw' turn eliminates the need for a rotation, so this algorithm can be done very quickly." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "56", "imageFileName": "oll56.gif", "moves": "Fw (R U R' U') Fw' F (R U R' U') (R U R' U') F'", "comments": "I do this algorithm as the easy P-orientation followed by the easy T-orientation repeated twice." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "55", "imageFileName": "oll55.gif", "moves": "(R U2) (R2 U' R U' R' U2) (F R F')", "comments": "This is just a Sune performed from the back right with a setup at the beginning and a sledgehammer at the end." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "13", "imageFileName": "oll13.gif", "moves": "(Rw U' Rw' U' Rw U Rw' y' (R' U R)", "comments": "I like this algorithm. I just wish it didn't have a rotation." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "16", "imageFileName": "oll16.gif", "moves": "(Rw U Rw') (R U R' U') (Rw U' Rw')", "comments": "This is just a fast trigger with a fast setup before and after." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "14", "imageFileName": "oll14.gif", "moves": "(R' F) (R U R' F' R) y' (R U' R')", "comments": "This case is pretty nice, but like OLL #13, I don't like the rotation." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "15", "imageFileName": "oll15.gif", "moves": "(Lw' U' Lw) (L' U' L U) (Lw' U Lw)", "comments": "This is just the mirror of OLL #16." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "41", "imageFileName": "oll41.gif", "moves": "(R U') (R' U2) (R U) y (R U') (R' U' F')", "comments": "This case looks difficult, but it's actually pretty easy and flows kind of nicely." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "30", "imageFileName": "oll30.gif", "moves": "(R2' U R' B') (R U') (R2' U) (Lw U Lw')", "comments": "After the first set of moves, everything picks up a bit and it's easy to finish the algorithm." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "42", "imageFileName": "oll42.gif", "moves": "(L' U) (L U2') (L' U') y' (L' U) (L U F)", "comments": "This is just the mirror of OLL #41." },
    { "type": algorithm_1.AlgorithmType.Oll, "name": "29", "imageFileName": "oll29.gif", "moves": "(L2 U' L B) (L' U) (L2 U') (Rw' U' Rw)", "comments": "This is just the mirror of OLL #30." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Aa", "imageFileName": "pll01.gif", "moves": "x (R' U R') D2 (R U' R') D2 R2", "comments": "This is a basic corner 3-cycle. It is one of my favorite and fastest algorithms. Perform the D2s with the left hand and everything else with the right." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Ab", "imageFileName": "pll02.gif", "moves": "x R2 D2 (R U R') D2 (R U' R) [y'] x (L U' L) D2 (L' U L) D2 L2", "comments": "This is just the inverse of the other A perm. It is performed in a very similar manner." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "E", "imageFileName": "pll03.gif", "moves": "x' (R U') (R' D) (R U R' D') (R U R' D) (R U') (R' D')", "comments": "This alg is just two orientations performed consecutively." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Ua", "imageFileName": "pll06.gif", "moves": "(R U' R U) (R U) (R U') (R' U' R2)", "comments": "This is just a simple 3-edge cycle. It is almost as fast as the corner cycles. I solve this case with the bar at the front or the back." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Ub", "imageFileName": "pll07.gif", "moves": "(R2 U) (R U R' U') (R' U') (R' U R')", "comments": "This is the inverse of the other U perm. I place my hands slightly differently for this algorithm. I solve this case with the bar at the front or the back." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "H", "imageFileName": "pll05.gif", "moves": "(M2' U) (M2' U2) (M2' U) M2'", "comments": "This is extremely easy to recognize and can be performed VERY quickly. The M'2 is actually performed as (M'M') with rapid pushing at the back face of the M layer with the ring and then middle fingers." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Z", "imageFileName": "pll04.gif", "moves": "(M2' U) (M2' U) (M' U2) (M2' U2) (M' U2)", "comments": "The Z permutation is performed very similarly to the H perm. The last U2 is not necessary if you account for it before the algorithm." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Ja", "imageFileName": "pll08.gif", "moves": "(R' U L') U2 (R U' R') U2 (L R U')", "comments": "I perform the R of the [R L] a split second after I start the L so that I can immediately perform the U' to AUF when the L face has been moved to where it belongs." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Jb", "imageFileName": "pll09.gif", "moves": "(R U R' F') (R U R' U') (R' F) (R2 U') (R' U')", "comments": "This is the same as the T perm with the last four moves instead performed at the beginning." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "T", "imageFileName": "pll10.gif", "moves": "(R U R' U') (R' F) (R2 U') (R' U' R U) (R' F')", "comments": "This is the T permuation. It is long but definitely very fast and easy. It can be performed in almost one swift motion without any readjusting of the fingers. Note that it is a combination of two easy orientations." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Rb", "imageFileName": "pll11.gif", "moves": "(R' U2) (R U2) (R' F R U R' U') (R' F' R2 U')", "comments": "This is a pretty straightforward alg that flows pretty nicely." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Ra", "imageFileName": "pll12.gif", "moves": "R U R' F' R U2 R' U2 R' F R U R U2 R' U'", "comments": "You could also just mirror Rb, but this alg is more right hand friendly. Notice the similarity with the Jb permutation." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "F", "imageFileName": "pll13.gif", "moves": "R' U' F' (R U R' U') (R' F) (R2 U') (R' U' R U) (R' U R)", "comments": "This is a T permutation with a 3 move setup in the beginning and a cancellation of one of those moves at the end." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Ga", "imageFileName": "pll15.gif", "moves": "(R2' Uw) (R' U R' U' R Uw') R2' y' (R' U R)", "comments": "This alg has a pretty decent flow to it and can be performed almost in one motion until the rotation." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Gb", "imageFileName": "pll16.gif", "moves": "(R' U' R) y (R2' Uw R' U) (R U' R Uw' R2')", "comments": "This is the inverse of Ga. Note how similar they look. I perform this one almost exactly the same way." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Gc", "imageFileName": "pll14.gif", "moves": "(R2' Uw' R U') (R U R' Uw R2) (Fw R' Fw')", "comments": "You could rotate and insert the pair instead of performing the last three moves as shown." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Gd", "imageFileName": "pll17.gif", "moves": "(R U R') y' (R2' Uw' R U') (R' U R' Uw R2)", "comments": "This is just the inverse of Gc. I execute it very similarly because most of the moves overlap in the same manner." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "V", "imageFileName": "pll18.gif", "moves": "(R' U R' Dw') (R' F' R2 U') (R' U R' F) (R F)", "comments": "This is one of my least favorite permutations because the flow just isn't there." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Na", "imageFileName": "pll19.gif", "moves": "(z) D (R' U) (R2 D' R D U') (R' U) (R2 D' R U' R)", "comments": "This alg could also be performed using &lt;R,U,L&gt; if you don't do the rotation, but this way is faster with practice." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Nb", "imageFileName": "pll20.gif", "moves": "(z) U' (R D') (R2' U R' D U') (R D') (R2' U R' D R')", "comments": "This is just the mirror of the other N permutation." },
    { "type": algorithm_1.AlgorithmType.Pll, "name": "Y", "imageFileName": "pll21.gif", "moves": "(F R U') (R' U' R U) (R' F') (R U R' U') (R' F R F')", "comments": "This is very quick and can be performed without any adjustments of where the fingers are. It is just a combination of two quick orientations." }
];
//# sourceMappingURL=app.component.js.map