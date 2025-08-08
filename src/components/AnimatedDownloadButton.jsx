// src/components/AnimatedDownloadButton.jsx

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"; // Required for motion path
import Snap from "snapsvg-cjs";
import "../App.css";

// Register GSAP plugins
gsap.registerPlugin(CustomEase, DrawSVGPlugin, MotionPathPlugin);

const AnimatedDownloadButton = ({ cvPath, downloadName, children }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const containerRef = useRef(null);
  const btnRef = useRef(null);
  const dotRef = useRef(null);
  const textRef = useRef(null);
  const mainCircRef = useRef(null);
  const subCircRef = useRef(null);
  const mainCircFillRef = useRef(null);
  const arrowRef = useRef(null);
  const rectRef = useRef(null);
  const gradientStop1Ref = useRef(null);
  
  const tl = useRef(null);
  
  useEffect(() => {
    CustomEase.create('custom', 'M0,0,C0.042,0.14,0.374,1,0.5,1,0.64,1,0.964,0.11,1,0');
    CustomEase.create('customBounce', 'M0,0 C0.046,0.062 0.018,1 0.286,1 0.532,1 0.489,-0.206 0.734,-0.206 0.784,-0.206 0.832,-0.174 1,0');

    const points = [];
    let data = Snap.path.toCubic('M0,0 a9,9 0 0,1 0,18 a9,9 0 0,1 0,-18');
    for (let i = 0; i < data.length; i++) {
        let seg = data[i];
        if (seg[0] === 'M') {
            points.push({ x: seg[1], y: seg[2] });
        } else {
            for (let j = 1; j < 6; j+=2) {
                points.push({ x: seg[j], y: seg[j+1] });
            }
        }
    }

    const changeText = () => {
        if(textRef.current) {
            textRef.current.textContent = 'open';
            gsap.set(textRef.current, { x: -5 });
        }
    };
    
    const onComplete = () => {
        setIsCompleted(true);
        setIsDownloading(false);
    }
    
    gsap.set(rectRef.current, {transformOrigin: '50% 50%', rotation: 45});

    tl.current = gsap.timeline({ paused: true, onComplete: onComplete });
    const downloadTime = Math.random() * 0.5 + 0.7;

    tl.current
        .to(arrowRef.current, { duration: .35, y: 2.5, ease: 'custom' }, 'click')
        .to(textRef.current, { duration: .3, svgOrigin: '55% 35%', scale: .77, ease: 'custom' }, 'click+=.05')
        .set(subCircRef.current, { fillOpacity: 1, strokeOpacity: 1 }, 'squeeze-=.3')
        .to(subCircRef.current, { duration: .35, fillOpacity: 0, ease: 'power1.inOut' }, 'squeeze-=.3')
        .to(subCircRef.current, { duration: .45, attr:{r: 13}, strokeOpacity: 0, className: '+=strokeW', ease: 'none' }, 'squeeze-=.3')
        .to(btnRef.current, { duration: .7, attr:{d: 'M50,25 h0 a10,10 0 0,1 10,10 a10,10 0 0,1 -10,10 s0,0 0,0  a10,10 0 0,1 -10,-10 a10,10 0 0,1 10,-10 h0'}, ease: 'sine.out' }, 'squeeze')
        .to([mainCircRef.current, mainCircFillRef.current, rectRef.current, arrowRef.current], { duration: .7, x: 30, ease: 'sine.out' }, 'squeeze')
        .to(rectRef.current, { duration: .7, fill: '#fff', rotation: 270, ease: 'sine.out' }, 'squeeze')
        .to(textRef.current, { duration: .3, autoAlpha: 0, y: 7, onComplete: changeText }, 'squeeze')
        .to(arrowRef.current, { duration: .7, attr:{d: 'M20,39 l3.5,-3.5 l-3.5,-3.5 M20,39 l-3.5,-3.5 l3.5,-3.5 M20,39 l0,0'}, transformOrigin: '50% 50%', rotation: 225, ease: 'sine.out' }, 'squeeze')
        .to(dotRef.current, { duration: .4, attr:{r: 1.5}, ease: 'back.out(7)'})
        .set(subCircRef.current, { drawSVG: 0, strokeOpacity: 1,  transformOrigin: '50% 50%', x: 30, rotation: -90, attr:{r: 9.07}})
        .to(subCircRef.current, { duration: downloadTime, drawSVG: '102%', ease: 'power2.in' }, 'fill+=.02')
        .to(dotRef.current, { duration: downloadTime, motionPath:{path: points, align: subCircRef.current, alignOrigin:[0.5,0.5]}, attr:{r: 2.7} , ease: 'power2.in' }, 'fill')
        .to(gradientStop1Ref.current, { duration: downloadTime, attr:{offset: '0%'}, ease: 'power2.in' }, 'fill')
        .to(dotRef.current, { duration: .44, fill: '#02fc86', y: -22, ease: 'power1.out' }, 'stretch-=.01')
        .to(dotRef.current, { duration: .27, transformOrigin: '50% 50%', scaleX: .5, ease: 'slow(0.1, 2, true)' }, 'stretch+=.04')
        .to(dotRef.current, { duration: .3, scaleY: .6, ease: 'slow(0.1, 2, true)' }, 'stretch+=.31')
        .to(dotRef.current, { duration: .44, scaleX: .4, y: 22, ease: 'power2.in' }, 'stretch+=.45')
        .to([mainCircRef.current, subCircRef.current, arrowRef.current, rectRef.current, mainCircFillRef.current], { duration: .33, opacity: 0, ease: 'power2.out' }, 'stretch+=.2')
        .to(btnRef.current, { duration: .4, attr:{d: 'M50,25 h20 a10,10 0 0,1 10,10 a10,10 0 0,1 -10,10 s-20,0 -40,0 a10,10 0 0,1 -10,-10 a10,10 0 0,1 10,-10 h20'}, ease: 'power1.out' }, 'stretch+=.2')
        .set(dotRef.current, { opacity: 0 }, 'stretch+=.875')
        .to(btnRef.current, { duration: .01, stroke: '#02fc86', ease: 'power2.in' }, 'stretch+=.87')
        .to(btnRef.current, { duration: .3, attr:{d: 'M50,25 h20 a10,10 0 0,1 10,10 a12,12 0 0,1 -10,10.5 s-20,6 -40,0 a12,12 0 0,1 -10,-10.5 a10,10 0 0,1 10,-10 h20'},
            ease: 'customBounce' }, 'stretch+=.869')
        .to(textRef.current, { duration: .45, autoAlpha: 1, y: 0, ease: 'back.out(2.5)' }, 'stretch+=.855');
    
    return () => { if (tl.current) tl.current.kill(); };
  }, []);

  const handleDownload = () => {
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
  
  const handleClick = () => {
    if (isCompleted) {
        window.open(cvPath, '_blank');
        return;
    }
    if (isDownloading) return;
    setIsDownloading(true);
    handleDownload();
    tl.current.play(0);
  };

  return (
    <div className="download-button-container" onClick={handleClick} ref={containerRef}>
      {/* --- ALL ATTRIBUTES BELOW ARE NOW CORRECT CAMELCASE --- */}
      <svg viewBox='0 0 100 50' width='220' height='110' fill='none' className="download-button-svg">
        <circle ref={mainCircRef} cx='20' cy='35' r='8.5' fill='#00cffc' className='mainCircle'></circle>
        <circle ref={mainCircFillRef} cx='20' cy='35' r='8.05' stroke='#00cffc' strokeWidth='.9' fill='url(#gradient)' className='mainCircleFill'></circle>
        <rect ref={rectRef} x='17.5' y='32.5' width='5' height='5' stroke='none' fill='#00cffc' className='rect'></rect>
        <path ref={arrowRef} d='M20,39 l3.5,-3.5 l0,0 M20,39 l-3.5,-3.5 l0,0 M20,39 l0,-7.5' stroke='#fff' strokeLinecap='round' strokeWidth='.8' className='arrow'></path>
        <text ref={textRef} x='55' y='36.5' fill='#fff' textAnchor='middle' fontSize='5.5' letterSpacing='.2' className='text'>{children}</text>
        <path ref={btnRef} d='M50,25 h30 a10,10 0 0,1 10,10 a10,10 0 0,1 -10,10 s-30,0 -60,0 a10,10 0 0,1 -10,-10 a10,10 0 0,1 10,-10 h30' stroke='#00cffc' strokeWidth='.7' fill='transparent' className='btn'></path>
        <circle ref={subCircRef} cx='20' cy='35' r='7.9' fill='#fff' fillOpacity='0' stroke='#fff' strokeWidth='1.6' strokeOpacity='0' className='subCircle'></circle>
        <circle ref={dotRef} cx='50' cy='26' r='0' fill='#fff' className='dot'></circle>
        <defs>
          <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop ref={gradientStop1Ref} offset='98%' className='gradient' stopColor='transparent'/>
            <stop offset='98%' className='gradient' stopColor='#00afd3'/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedDownloadButton;