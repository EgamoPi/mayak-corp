import styled from 'styled-components';
import { motion } from 'framer-motion';
import { waveAnimation } from '../animation';

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 431"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <motion.path
          d="M-77.5455 76.8924C-1.1901 74.6102 49.2718 27.2859 203.445 61.1547C357.619 95.0235 425.821 156.833 581.164 169.468C736.507 182.103 798.927 226.857 927.788 280.918C1121.25 362.082 1469.1 378.705 1469.1 378.705"
          stroke="url(#paint0_linear)"
          stroke-width="0.7"
          variants={waveAnimation}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M-95.539 101.778C-18.6551 97.3663 31.686 45.6256 187.321 77.7224C342.957 109.819 412.286 173.92 568.882 183.358C725.477 192.797 788.807 238.872 919.154 293.143C1114.85 374.623 1465.38 383.321 1465.38 383.321"
          stroke="url(#paint1_linear)"
          stroke-width="0.8"
          variants={waveAnimation}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M-112.963 127.066C-35.6023 120.507 14.479 64.3403 171.561 94.6241C328.643 124.908 399.2 191.279 556.984 197.481C714.767 203.682 779.073 251.06 910.952 305.506C1108.95 387.247 1462 387.931 1462 387.931"
          stroke="url(#paint2_linear)"
          stroke-width="0.9"
          variants={waveAnimation}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M-129.808 152.747C-52.0217 144.022 -2.33949 83.424 156.173 111.854C314.686 140.283 386.571 208.9 545.477 211.827C704.383 214.753 769.728 263.413 903.185 317.995C1103.55 399.942 1458.94 392.528 1458.94 392.528"
          stroke="url(#paint3_linear)"
          variants={waveAnimation}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M-146.064 178.809C-67.9041 167.901 -18.7607 102.87 141.165 129.405C301.091 155.94 374.405 226.775 534.366 226.389C694.328 226.003 760.778 275.923 895.858 330.602C1098.66 412.695 1456.21 397.102 1456.21 397.102"
          stroke="url(#paint4_linear)"
          stroke-width="1.1"
          variants={waveAnimation}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M-161.721 205.241C-83.2402 192.135 -34.7753 122.672 126.546 147.271C287.867 171.87 362.708 244.894 523.657 241.16C684.607 237.426 752.226 288.58 888.972 343.316C1094.28 425.493 1453.81 401.644 1453.81 401.644"
          stroke="url(#paint5_linear)"
          stroke-width="1.2"
          variants={waveAnimation}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M-176.769 232.031C-98.0211 216.713 -50.3746 142.823 112.323 165.445C275.02 188.067 351.487 263.247 513.356 256.131C675.226 249.015 744.075 301.377 882.531 356.127C1090.4 438.326 1451.75 406.147 1451.75 406.147"
          stroke="url(#paint6_linear)"
          stroke-width="1.3"
          variants={waveAnimation}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M-191.2 259.168C-112.238 241.625 -65.5495 163.317 98.5038 183.921C262.557 204.526 340.747 281.826 503.467 271.294C666.187 260.762 736.331 314.304 876.539 369.025C1087.04 451.18 1450.01 410.602 1450.01 410.602"
          stroke="url(#paint7_linear)"
          stroke-width="1.4"
          variants={waveAnimation}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M-205.004 286.64C-125.882 266.86 -80.2914 184.145 85.0967 202.691C250.485 221.237 330.496 300.619 493.996 286.64C657.496 272.661 728.996 327.354 870.996 382C1084.19 464.043 1448.6 415 1448.6 415"
          stroke="url(#paint8_linear)"
          stroke-width="1.5"
          variants={waveAnimation}
          initial="hidden"
          animate="show"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="12.9999"
          y1="69"
          x2="12.4687"
          y2="368.645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC594F" stopOpacity="0" />
          <stop offset="0.0548279" stopColor="#FC594F" />
          <stop offset="0.848928" stopColor="#5522B1" />
          <stop offset="1" stopColor="#5E4A92" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="50"
          y1="81"
          x2="52.5761"
          y2="388.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC594F" stopOpacity="0" />
          <stop offset="0.0881905" stopColor="#FC594F" />
          <stop offset="0.891583" stopColor="#5522B1" />
          <stop offset="1" stopColor="#5E4A92" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="57.0001"
          y1="120"
          x2="70.7494"
          y2="439.891"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC594F" stopOpacity="0" />
          <stop offset="0.0582288" stopColor="#FC594F" />
          <stop offset="0.891583" stopColor="#5522B1" />
          <stop offset="1" stopColor="#5E4A92" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="85.226"
          y1="145.921"
          x2="106.56"
          y2="472.777"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC594F" stopOpacity="0" />
          <stop offset="0.135417" stopColor="#FC594F" />
          <stop offset="0.891583" stopColor="#5522B1" />
          <stop offset="1" stopColor="#5E4A92" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="70.2466"
          y1="166.905"
          x2="101.29"
          y2="510.902"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC594F" stopOpacity="0" />
          <stop offset="0.135417" stopColor="#FC594F" />
          <stop offset="0.891583" stopColor="#5522B1" />
          <stop offset="1" stopColor="#5E4A92" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="55.7539"
          y1="188.213"
          x2="97.3251"
          y2="549.008"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC594F" stopOpacity="0" />
          <stop offset="0.135417" stopColor="#FC594F" />
          <stop offset="0.891583" stopColor="#5522B1" />
          <stop offset="1" stopColor="#5E4A92" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="41.7561"
          y1="209.835"
          x2="94.6547"
          y2="587.057"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC594F" stopOpacity="0" />
          <stop offset="0.135417" stopColor="#FC594F" />
          <stop offset="0.891583" stopColor="#5522B1" />
          <stop offset="1" stopColor="#5E4A92" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="28.2614"
          y1="231.763"
          x2="93.269"
          y2="625.012"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC594F" stopOpacity="0" />
          <stop offset="0.135417" stopColor="#FC594F" />
          <stop offset="0.891583" stopColor="#5522B1" />
          <stop offset="1" stopColor="#5E4A92" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="15.2777"
          y1="253.986"
          x2="93.1565"
          y2="662.836"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC594F" stopOpacity="0" />
          <stop offset="0.135417" stopColor="#FC594F" />
          <stop offset="0.891583" stopColor="#5522B1" />
          <stop offset="1" stopColor="#5E4A92" stopOpacity="0" />
        </linearGradient>
      </defs>
    </WaveSvg>
  );
};

export default Wave;

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
`;
