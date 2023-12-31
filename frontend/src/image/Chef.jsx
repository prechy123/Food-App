import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  initial: {
    opacity: 0,
    rotate: -360,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};
const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
    fill: "none",
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    fill: "rgb(0, 0, 0)",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const path2Variants = {
  initial: {
    opacity: 0,
    pathLength: 0,
    fill: "none",
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    fill: "rgb(0, 0, 0)",
    transition: {
      delay: 2,
      duration: 2,
      ease: "easeInOut",
    },
  },
};


export default function Chef() {
  return (
    <>
      <motion.svg
        // version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50.000000 50.000000"
        // preserveAspectRatio="xMidYMid meet"
        variants={svgVariants}
        initial="initial"
        animate="animate"
        className="icon-logo"
        drag
        dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}
      >
        <g
          transform="translate(0.000000,50.000000) scale(0.009766,-0.009766)"
          // fill="#000000"
          // stroke="#fff"
        >
          <motion.path
            variants={pathVariants} fill="none"
            d="M2390 5104 c-256 -56 -463 -195 -604 -407 l-55 -83 -83 10 c-115 13
-271 -5 -392 -45 -434 -144 -706 -567 -656 -1021 26 -233 118 -419 290 -588
146 -144 323 -230 543 -265 l37 -6 0 -427 c0 -427 0 -427 24 -477 25 -54 71
-100 123 -122 26 -10 153 -13 643 -13 597 0 610 0 630 20 21 21 26 69 10 100
-20 38 -55 40 -647 40 l-574 0 -24 25 c-23 22 -25 31 -25 125 l0 100 945 0
945 0 0 -100 c0 -94 -2 -103 -25 -125 -24 -25 -26 -25 -208 -25 -190 0 -240
-8 -257 -40 -16 -30 -11 -75 10 -98 20 -21 27 -22 243 -22 194 0 227 3 263 19
49 22 111 92 124 140 6 21 10 210 10 458 l0 422 48 6 c194 26 392 122 545 264
297 276 378 750 193 1121 -176 355 -535 561 -931 536 l-100 -6 -45 71 c-132
210 -379 373 -634 418 -82 15 -288 12 -366 -5z m442 -181 c315 -108 523 -376
553 -713 4 -41 13 -85 21 -96 29 -48 112 -37 134 17 15 36 6 162 -19 259 l-17
68 42 6 c23 3 80 1 127 -4 514 -59 845 -554 692 -1037 -63 -198 -223 -381
-422 -482 -68 -34 -212 -72 -298 -78 -95 -6 -233 15 -331 52 -83 31 -109 31
-139 0 -28 -28 -32 -70 -10 -102 24 -35 173 -85 318 -108 l37 -6 0 -234 0
-235 -185 0 -185 0 0 129 c0 111 -3 132 -19 152 -25 31 -83 32 -114 1 -20 -21
-22 -34 -25 -152 l-4 -130 -174 0 -174 0 0 120 c0 68 -5 130 -11 144 -16 33
-69 52 -101 35 -43 -23 -47 -38 -48 -171 l0 -128 -174 0 -174 0 -3 130 c-4
118 -6 131 -26 152 -28 28 -84 29 -113 3 -18 -16 -20 -30 -20 -152 l0 -133
-170 0 -170 0 0 234 0 235 48 6 c136 18 302 77 321 113 18 34 13 71 -14 97
-30 31 -56 31 -139 0 -77 -29 -215 -55 -293 -55 -123 0 -309 57 -420 130 -240
158 -375 400 -375 675 0 291 155 549 417 696 128 72 314 115 441 102 l51 -5
-18 -73 c-25 -108 -34 -219 -19 -254 22 -54 105 -64 135 -17 7 11 18 67 24
124 30 280 188 511 437 635 147 73 216 88 389 83 113 -3 142 -7 217 -33z"
          />
          <motion.path
            variants={path2Variants} fill="none"
            d="M966 1869 c-35 -27 -36 -86 -3 -116 12 -12 153 -96 312 -188 160 -92
300 -176 313 -188 34 -31 28 -70 -25 -164 -26 -45 -50 -83 -53 -83 -4 0 -146
80 -316 178 -368 213 -366 212 -399 212 -59 0 -97 -83 -57 -128 9 -11 168
-106 352 -212 184 -106 336 -194 338 -195 5 -4 -90 -163 -107 -179 -40 -36
-66 -25 -391 163 -205 118 -324 181 -343 181 -61 0 -100 -82 -59 -128 20 -24
583 -349 660 -381 90 -37 194 -11 263 67 33 38 43 44 57 36 9 -6 157 -91 327
-189 171 -98 311 -179 313 -180 1 -1 -5 -18 -13 -38 -24 -57 -19 -144 10 -204
43 -86 123 -133 224 -133 53 0 72 6 156 51 l96 50 45 -26 c108 -63 140 -75
205 -75 81 0 133 24 185 83 62 71 80 163 49 252 -8 21 -13 40 -12 40 1 1 58
32 127 70 155 85 170 97 170 146 0 43 -35 79 -77 79 -14 0 -88 -36 -166 -79
-209 -117 -180 -111 -280 -54 l-86 50 432 249 c238 137 442 259 455 271 17 17
22 34 22 70 0 180 240 362 478 365 93 1 146 -13 199 -51 114 -83 105 -242 -24
-397 -140 -167 -346 -238 -501 -170 -45 19 -70 25 -86 19 -36 -13 -273 -152
-286 -168 -22 -26 -17 -85 9 -106 40 -33 79 -24 194 42 l107 62 43 -17 c330
-126 814 249 784 607 -11 133 -81 233 -205 294 l-76 38 -145 0 c-132 0 -154
-3 -226 -27 -170 -58 -316 -174 -378 -301 -19 -39 -38 -92 -42 -117 l-6 -45
-455 -262 -456 -262 -426 246 c-235 135 -432 250 -439 255 -9 7 -8 18 4 45 22
54 20 150 -4 198 -30 58 -60 87 -144 135 -334 196 -576 330 -594 330 -12 0
-34 -9 -49 -21z m1336 -1194 c323 -186 603 -351 623 -367 43 -36 46 -73 9
-117 -19 -23 -34 -31 -57 -31 -24 0 -197 95 -667 366 -349 202 -636 368 -638
369 -1 1 17 36 40 78 l43 76 30 -18 c17 -9 294 -169 617 -356z"
          />
        </g>
      </motion.svg>
    </>
  );
}
