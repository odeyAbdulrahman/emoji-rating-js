import G1Like from "../../../dist/assets/G1/a.png";
import G1VeryGood from "../../../dist/assets/G1/b.png";
import G1Good from "../../../dist/assets/G1/c.png";
import G1NotSatisfied from "../../../dist/assets/G1/d.png";

import G2Like from "../../../dist/assets/G2/a.png";
import G2VeryGood from "../../../dist/assets/G2/b.png";
import G2Good from "../../../dist/assets/G2/c.png";
import G2NotSatisfied from "../../../dist/assets/G2/d.png";

const emojes = {
  G1: [
    { id: 1, name: "Like", img: G1Like, status: true },
    { id: 2, name: "very good", img: G1VeryGood, status: true },
    { id: 3, name: "good", img: G1Good, status: true },
    { id: 4, name: "Not satisfied", img: G1NotSatisfied, status: false },
  ],
  G2: [
    { id: 1, name: "Like", img: G2Like, status: true },
    { id: 2, name: "very good", img: G2VeryGood, status: true },
    { id: 3, name: "good", img: G2Good, status: true },
    { id: 4, name: "Not satisfied", img: G2NotSatisfied, status: false },
  ],
};
export default emojes;
