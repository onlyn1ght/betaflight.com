"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1613],{76625:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=o(85893),i=o(11151);const s={},a="Soft Mounting and Noise Reduction",r={id:"wiki/guides/current/Soft-Mounting-and-Noise-Reduction",title:"Soft Mounting and Noise Reduction",description:"FAQ #56 has been where all the info has been put. We will be editing FAQ #56 to put information on this page.",source:"@site/docs/wiki/guides/current/Soft-Mounting-and-Noise-Reduction.md",sourceDirName:"wiki/guides/current",slug:"/wiki/guides/current/Soft-Mounting-and-Noise-Reduction",permalink:"/docs/wiki/guides/current/Soft-Mounting-and-Noise-Reduction",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"SmartAudio",permalink:"/docs/wiki/guides/current/SmartAudio"},next:{title:"SoftSerial",permalink:"/docs/wiki/guides/current/SoftSerial"}},h={},l=[{value:"Damping Theory by ctzsnooze:",id:"damping-theory-by-ctzsnooze",level:3},{value:"Soft Mounting the FC board",id:"soft-mounting-the-fc-board",level:2},{value:"A nice Over view of the Yaw Twitch and/or throttle oscillations from ctzsnooze",id:"a-nice-over-view-of-the-yaw-twitch-andor-throttle-oscillations-from-ctzsnooze",level:4},{value:"But the most important thing is a truly functional soft mounting. Not some half-hearted bunch of o rings",id:"but-the-most-important-thing-is-a-truly-functional-soft-mounting-not-some-half-hearted-bunch-of-o-rings",level:4},{value:"Post by jubifly",id:"post-by-jubifly",level:4},{value:"Here is a post from ctzsnooze on a better soft-mounting method.",id:"here-is-a-post-from-ctzsnooze-on-a-better-soft-mounting-method",level:4},{value:"Post from deekon on Soft Mounting:",id:"post-from-deekon-on-soft-mounting",level:4},{value:"Links to Soft Mounting hardware:",id:"links-to-soft-mounting-hardware",level:3},{value:"Soft Mounting Motors",id:"soft-mounting-motors",level:2},{value:"Comments on this by AILERON8:",id:"comments-on-this-by-aileron8",level:4},{value:"AILERON8:",id:"aileron8",level:4},{value:"Tesseract1984:",id:"tesseract1984",level:4},{value:"Another Post on curing oscillations from linklemming:",id:"another-post-on-curing-oscillations-from-linklemming",level:4},{value:"Motor Vibration Isolators. Printed in extra flexible NinjaFlex (softer than TPU)",id:"motor-vibration-isolators-printed-in-extra-flexible-ninjaflex-softer-than-tpu",level:3},{value:"Motor soft mount idea:",id:"motor-soft-mount-idea",level:4},{value:"Some experiments and observations from AILERON8:",id:"some-experiments-and-observations-from-aileron8",level:4},{value:"Adding Cap(s)",id:"adding-caps",level:2},{value:"Thread about Caps for Noise reduction (has links to recommended Caps):",id:"thread-about-caps-for-noise-reduction-has-links-to-recommended-caps",level:4},{value:"Post by Swing3r",id:"post-by-swing3r",level:4},{value:"Post by fftunes",id:"post-by-fftunes",level:4},{value:"Originally Posted by mnemennth: ad nauseum",id:"originally-posted-by-mnemennth-ad-nauseum",level:3},{value:"List of Soft mounting parts from SadLeprechaun-",id:"list-of-soft-mounting-parts-from-sadleprechaun-",level:3},{value:"Soft mounting parts from AILERON8",id:"soft-mounting-parts-from-aileron8",level:3},{value:"Post on soft motor mounts:",id:"post-on-soft-motor-mounts",level:3}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"soft-mounting-and-noise-reduction",children:"Soft Mounting and Noise Reduction"}),"\n",(0,n.jsx)(t.p,{children:"FAQ #56 has been where all the info has been put. We will be editing FAQ #56 to put information on this page.\nPlease check often as this page gets built."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/docs/wiki/guides/current/FAQ",children:"FAQ #56 "})," for Discussion on Yaw Twitches and Mid-throttle Oscillations. This covers Gyros and other possible causes."]}),"\n",(0,n.jsxs)(t.p,{children:["Also be sure to read:\n",(0,n.jsx)(t.a,{href:"/docs/wiki/guides/archive/Gyro-And-Dterm-Filtering-Recommendations-3-1",children:"Gyro & Filters"}),"\n",(0,n.jsx)(t.a,{href:"/docs/wiki/guides/current/Black-Box-logging-and-usage",children:"BB logging & Filters"})]}),"\n",(0,n.jsx)(t.h3,{id:"damping-theory-by-ctzsnooze",children:"Damping Theory by ctzsnooze:"}),"\n",(0,n.jsx)(t.p,{children:"Regarding so-called 'maximum damped frequency'..."}),"\n",(0,n.jsx)(t.p,{children:"Ideal hardware damping results in a physical effect comparable to that of an electronic low pass filter. We want is full transmission without delay of frequencies below a cut point, and attenuation above that; the higher we go in frequency above the cut point, the less gets transmitted through the damping material."}),"\n",(0,n.jsx)(t.p,{children:"Real world hardware damping usually has the unfortunate result of also generating a resonant peak at the frequency where the damping ought to start. At frequencies above that resonant peak, there is a progressive cut."}),"\n",(0,n.jsx)(t.p,{children:"In principle, therefore, there is no 'maximal damping frequency'. There is just a cutoff point above which damping / attenuation gets progressively greater."}),"\n",(0,n.jsx)(t.p,{children:"The classical physical 'damper' is the shock absorber on a car."}),"\n",(0,n.jsx)(t.p,{children:"Electronic low pass filters (eg PT1 or biquad) do not resonate around cutoff. But most real world hardware damping methods do."}),"\n",(0,n.jsx)(t.p,{children:"The typical damping method we use involves some soft, vibration absorbent material that has a bit of 'give', isolating one part of the system from another."}),"\n",(0,n.jsx)(t.p,{children:"The ideal damping material is a viscoelastic substance that absorbs high frequencies and does not act like a spring."}),"\n",(0,n.jsxs)(t.p,{children:["Real world damping materials ",(0,n.jsx)(t.em,{children:"all"})," act like springs. The springier they are, the more resonance you will get."]}),"\n",(0,n.jsxs)(t.p,{children:["Adding mass to an object on a spring will ",(0,n.jsx)(t.em,{children:"lower"})," the cut / resonant peak frequency but will also ",(0,n.jsx)(t.em,{children:"increase"})," the magnitude of the resonance."]}),"\n",(0,n.jsx)(t.p,{children:"For a flight controller, we want to reduce transmission of high frequency noise, but not cause resonance around the peak. The isolating materials should be viscoelastic, not springy. 'Hard' rubber foam and silicone are not viscoelastic. They will minimize transmission of noise but will result in a resonant peak."}),"\n",(0,n.jsx)(t.p,{children:"Adding mass to the FC will lower the cut point and attenuate noise. Very light FC's on relatively hard foam will not be damped much and may resonate at exactly the point we want to cut."}),"\n",(0,n.jsx)(t.p,{children:"If an arm has flex, it will have a resonant peak at a certain frequency and dampen out noise above that. Adding mass to the end of the arm eg with heavier motors will lower that frequency and enhance resonance. Making the arm stiffer will shift the resonant peak higher and attenuate the magnitude of the resonance."}),"\n",(0,n.jsx)(t.p,{children:"The two main problems with 'soft mounting' methods are:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"they all can induce resonance at or around their cutoff point, and"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"it is difficult to know what the actual cutoff point will be."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["It is possible to test performance of soft mounting systems is to push noise through them and see how much gets through. For an FC we have the recorder built in - the gyro. So if we were to hard attach the FC to a loudspeaker cone, and drive noise into the loudspeaker, we could get the frequency response of that system (the loudspeaker itself would be non-linear especially with the mass of the FC attached). If we put a soft mount ",(0,n.jsx)(t.em,{children:"between the loudspeaker cone and the FC"}),", we could see exactly how that soft mount altered noise transmission to the FC; we would have scientific evidence of what kind of attenuation / resonance was actually happening."]}),"\n",(0,n.jsx)(t.p,{children:"To do it properly, the mass of the soft mount parts would be included in the first part of the test by attaching them to the loudspeaker cone but not in the attenuation pathway."}),"\n",(0,n.jsx)(t.p,{children:"I did something like this about 30 years ago when testing frequency response of arterial pressure monitoring systems. It takes quite a bit of time to do. Until someone gets hard data on it, we really have no idea if our soft mounts are too soft, too hard, causing resonance, etc."}),"\n",(0,n.jsx)(t.h2,{id:"soft-mounting-the-fc-board",children:"Soft Mounting the FC board"}),"\n",(0,n.jsx)(t.h4,{id:"a-nice-over-view-of-the-yaw-twitch-andor-throttle-oscillations-from-ctzsnooze",children:"A nice Over view of the Yaw Twitch and/or throttle oscillations from ctzsnooze"}),"\n",(0,n.jsx)(t.p,{children:"Lots of us have seen exactly this behaviour. I am surprised that you seem so astonished now that you find it happens to you. It happens randomly. It could happen to anyone. It just happened to happen to you. :-)\nIt goes away with replacing the gyro chip, replacing the FC, or soft mounting the FC; these fixes work whether or not capacitors are added. Sometimes it goes away by just adding capacitors."}),"\n",(0,n.jsx)(t.p,{children:"Since soft mounting is a reliable fix, external vibration seems the likely culprit, difficult otherwise to explain how soft mounting often causes it to just disappear. Blheli-s ESCs are more commonly implicated than non-BLHeli-s ESC's and in some cases capacitors help so there may be an electrical contribution. It is far more common on yaw than the other axes. The yaw sensor within the chip must be physically different from pitch/roll since the axes relative to the layer of silicon for yaw vs pitch/roll are quite different."}),"\n",(0,n.jsx)(t.p,{children:"That's all we know for sure. How these factors actually cause the oscillation, and why it is yaw exclusive, is completely speculative.\nWhen soft mounting doesn't work it's usually because it isn't done in such a way as to effectively isolate the FC.\nI've seen such extreme examples as to render the quad un-flyable, and also much milder examples, so it is not an all or none thing."}),"\n",(0,n.jsx)(t.p,{children:"Although the magnitude is increased by higher yaw P it is not simple feedback oscillation, there is no threshold value of P below which it disappears. The actual oscillation frequencies are so low as to not be attenuated by the o-rings. Exactly what the o-rings block is not clear.\nIt cannot be eliminated by filtering the gyro data - as has been pointed out before, out the primary oscillation frequency is within the range we need for to fly the quad normally."}),"\n",(0,n.jsx)(t.p,{children:"It is not a software issue in blheli or Betaflight, we can be sure of that. Replacing the gyro chip doesn't change that software yet it does fix the problem.\nMy gut feeling is that this is an inherent issue in these gyro chip themselves, and that some individual examples of these chips get it much worse than others. That's why I recommend replacing the gyro chip or the whole FC if simple soft mounting fails to solve the problem."}),"\n",(0,n.jsx)(t.p,{children:"When you guys say you are soft mounting, be aware you need to over drill the holes to 4mm and ideally bevel the top and bottom of the hole so that the FC 'floats' in all axes. You need to check for free movement. If you don't drill out the holes the bolt holes will stick on yaw on the bolts and transmit vibrations directly. Also you can't have anything stiff pushing on the FC, ideally all wires to/from it need to be very fine silicone."}),"\n",(0,n.jsx)(t.p,{children:"You should revisit that mounting and check it does work like you can freely wiggle the board in all three movements. Do that before doing anything else. That is the most likely thing to fix it."}),"\n",(0,n.jsx)(t.p,{children:"I have seen this problem twice (two separate quads, both 6000's, out of maybe 15 machines) and exhaustively tested solutions on those two with the problem. It is pointless trying to filter it out. It is a hardware gyro issue where it is sensitive to noise generated by motors powered by BLHeli-s ESCs. It will be affected by changing yaw P but typically not eliminated."}),"\n",(0,n.jsx)(t.p,{children:"In both cases, proper soft mounting fixed it. Without the soft mounting I also could eliminate it on one by desoldering the gyro chip and replacing it with a brand new one. I didn't try that on the other."}),"\n",(0,n.jsx)(t.p,{children:"My conceptual model is that the hardware PWM system in BLHeli-S ESCs causes some kind of very specific noise at certain throttle points that deeply affects the yaw sensor part of some gyro chips."}),"\n",(0,n.jsx)(t.p,{children:"It is also possible that there is an issue in BLHeli-S code that causes the problem. By that I mean there may be a throttle point where output is not linear. I have noticed that by spooling motors in motors tab very slowly and listening carefully there are some throttle points where the motors lose their smoothness. This non smoothness at certain points is also the case on non BLHeli-s ESCs. It could be that all four motors together at these points somehow encourage positive feedback. To rule this out someone needs to thrust test in such a way to validate linear proportional motor output in the affected range. But to date no-one has done that test or identified any specific ESC firmware issue. FWIW, I disable all dithering in BLHeli-S. Maybe give that a try."}),"\n",(0,n.jsx)(t.h4,{id:"but-the-most-important-thing-is-a-truly-functional-soft-mounting-not-some-half-hearted-bunch-of-o-rings",children:"But the most important thing is a truly functional soft mounting. Not some half-hearted bunch of o rings"}),"\n",(0,n.jsx)(t.p,{children:"MotoLab Cyclone boards have plenty of space around the holes, intentionally, no problem there. It's a totally different situation with a Dodo, which has components very close to the holes. Especially tough if the FC bolts need to keep going up for structural reasons like on many small frames, in which case you have no option but to enlarge the holes."}),"\n",(0,n.jsx)(t.p,{children:"I can't stress enough that just over drilling isn't enough. The board can and will slide on the o ring until one hole stops with the edge of that hole wedged on a bolt. Beveling the top and bottom of the hole allows re-centering and is essential with a yaw issue of his kind. I use a cheap conical grinding stone to make the bevel."}),"\n",(0,n.jsx)(t.h4,{id:"post-by-jubifly",children:"Post by jubifly"}),"\n",(0,n.jsx)(t.p,{children:"Had similar problems on my build. I tried both, limiting possible electrical noise with capacitors and mechanical vibrations by soft mounting the FC with some rubber o-rings. Both with no luck. I then tried to remove the FC completely from fixed parts at the frame and left it hanging in the air (just the motor and rx wires) and the yaw twitches disappeared. My thoughts on that were that the rubber rings were not applicable (maybe too hard?!) for soft mounting...\nMaybe try leave the FC dangling in the air and see if it still happens - just to definitely eliminate the possibility of mechanical noise being the issue."}),"\n",(0,n.jsx)(t.h4,{id:"here-is-a-post-from-ctzsnooze-on-a-better-soft-mounting-method",children:"Here is a post from ctzsnooze on a better soft-mounting method."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"http://www.rcgroups.com/forums/showpost.php?p=35486733&postcount=36111",children:"http://www.rcgroups.com/forums/showpost.php?p=35486733&postcount=36111"})}),"\n",(0,n.jsx)(t.h4,{id:"post-from-deekon-on-soft-mounting",children:"Post from deekon on Soft Mounting:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.rcgroups.com/forums/showpost.php?p=38103439&postcount=50944",children:"https://www.rcgroups.com/forums/showpost.php?p=38103439&postcount=50944"})}),"\n",(0,n.jsx)(t.h3,{id:"links-to-soft-mounting-hardware",children:"Links to Soft Mounting hardware:"}),"\n",(0,n.jsxs)(t.p,{children:["OZ -- I am using these, $4.30 for 8 shipped. They are rubber 8mm x 8mm with standard M3 male/female mounting.\n",(0,n.jsx)(t.a,{href:"http://www.ebay.com/itm/151873404692?_trksid=p2057872.m2749.l2649&ssPageName=STRK%3AMEBIDX%3AIT&rmvSB=true",children:"http://www.ebay.com/itm/151873404692?_trksid=p2057872.m2749.l2649&ssPageName=STRK%3AMEBIDX%3AIT&rmvSB=true"}),"\nThese are the only ones I have tried and all yaw twitches are gone, they are stiffer than I would think would work, but working well on my revolts (SSG) and sparky2's (9250) flight controllers @ 32/16, motors are hard mounted."]}),"\n",(0,n.jsxs)(t.p,{children:["These were just posted and look to be red silicon (softer?)\n",(0,n.jsx)(t.a,{href:"http://rotorgeeks.com/index.php?route=product/product&product_id=599&search=damp",children:"http://rotorgeeks.com/index.php?route=product/product&product_id=599&search=damp"})]}),"\n",(0,n.jsxs)(t.p,{children:["Gozz -- These are the ones I recently started using too, they work very well for the size.\n",(0,n.jsx)(t.a,{href:"https://www.readymaderc.com/store/index.php?main_page=product_info&cPath=53_777&products_id=6306",children:"https://www.readymaderc.com/store/index.php?main_page=product_info&cPath=53_777&products_id=6306"})]}),"\n",(0,n.jsx)(t.h2,{id:"soft-mounting-motors",children:"Soft Mounting Motors"}),"\n",(0,n.jsx)(t.h4,{id:"comments-on-this-by-aileron8",children:"Comments on this by AILERON8:"}),"\n",(0,n.jsx)(t.p,{children:"Isolating vibration at its source before it's amplified is standard practice in just about every mechanical and aeronautical engineering handbook that's ever been written. Yet for some reason most folks in this hobby are so laser focused on a software-based filter or FC enhancement of some sort they're blinded to what should be an obvious solution. Dampening the motor vibration, stiffening the frame, or even placing a sensor near or on the motors (utilizing the active feedback signal within the FC software for an automated/enhanced filter) are going to have a much more pronounced effect on noise reduction than all the software filtering in the world.\nI'd also just like to mention that I am in no way trying to imply that software-based filters in the flight controller are ineffective. Only that reducing motor vibration has great and untapped potential in my opinion."}),"\n",(0,n.jsx)(t.h4,{id:"aileron8",children:"AILERON8:"}),"\n",(0,n.jsxs)(t.p,{children:["The same goes for motor soft mounting, the bolts must be isolated for the method to reach its full potential. I have yet to see a quad with fully soft-mounted motors, but I suspect it would make for the smoothest, most oscillation-free quad ever. So oscillation-free these 32khz gyro's should be all set for takeoff. Floating motors should eliminate the opportunity for resonance to develop and propagate towards the sensitive gyros. Unlike soft-mounting the FC, for motor dampening to be effective it doesn't need to eliminate frame oscillation. The goal for motor dampening is to decouple the frames' natural resonant frequency from the motor as its oscillations vary in frequency and amplitude. All motors oscillate, regardless of balancing. The frame won't oscillate if it's detached from the motors. The motor must completely float in order to achieve this effect however. Which is why I think folks will be in for a surprise when they see how well motor soft mounting can be if fully implemented. I honestly think FC soft mounting will be a thing of the past when the results start pouring-in...\nUsing ",(0,n.jsx)(t.a,{href:"https://m.banggood.com/10-PCS-Silica-Gel-Anti-vibration-Pad-in-for-22XX-23XX-Motor-p-1147595.html?rmmds=orderdetail&utm_source=tradetracker&utm_medium=tradetracker_SE&utm_campaign=tradetracker&utm_content=227736",children:"these wiggly jiggly ones from BG: "})]}),"\n",(0,n.jsx)(t.h4,{id:"tesseract1984",children:"Tesseract1984:"}),"\n",(0,n.jsx)(t.p,{children:"Agreed.\nHaving tried it all (soft mount FC, caps on mains, caps on ESCs, soft mounting motors), this seems to be the ticket. I've had varying levels of success with each option. The most useless of them all being a cap on the mains.\nSoft-mounting motors makes the most sense. In my opinion doing it to the FC is a band-aid while doing the motors attacks the source and doesn't introduce any delay.\nA little anecdotal story; i once went overboard with soft mounting a LUX v1 and it actually caused problems. I not only had those rubber bobbins, but also O-rings and the lower standoffs resting on a tpu printed plate with screw holes. What this caused was a very slow wobbling oscillation akin to when I-term is too high (at least in older BetaFlight versions).\nWhile multi-rotor flight is still in it's infancy and we are trying new things, yes there are a lot of hype trains. As you can see I've been on them all, but truly, this is the first one that has conclusively solved a plethora of issues including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"FPV video interference"}),"\n",(0,n.jsx)(t.li,{children:"HD cam jello"}),"\n",(0,n.jsx)(t.li,{children:"Sporadic yaw twitch"}),"\n",(0,n.jsx)(t.li,{children:"Un-tuneable D-term"}),"\n",(0,n.jsx)(t.li,{children:"etc etc\nWould love to see frames come out that have motor soft mounting built into the frame. IMO this should become an industry standard. Also had an idea a few months ago for FC screw holes to have silicon material with a hole big enough for screws.\nAnyway, just my 2 cents. Just converted my whole fleet using tpu soft mounts and it has literally changed my quadcopter experience. My HD footage actually starting to look like I might know what I'm doing.\nAll aboard, the hype train is leaving the station!"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"another-post-on-curing-oscillations-from-linklemming",children:"Another Post on curing oscillations from linklemming:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.rcgroups.com/forums/showpost.php?p=36220137&postcount=41113",children:"https://www.rcgroups.com/forums/showpost.php?p=36220137&postcount=41113"}),"\nLater comment:\nI just stuck three squarish (~15mm) pieces of electrical tape on the frame underneath the motors, used an exacto knife to cut holes in the tape for the screws and remounted the motors making sure not to tighten them down too much.\nI really doubted it would be as effective as it was since vibes can still come thru the mounting screws but it fixed the issue."]}),"\n",(0,n.jsx)(t.h3,{id:"motor-vibration-isolators-printed-in-extra-flexible-ninjaflex-softer-than-tpu",children:"Motor Vibration Isolators. Printed in extra flexible NinjaFlex (softer than TPU)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.rcgroups.com/forums/showpost.php?p=36698872&postcount=2693",children:"https://www.rcgroups.com/forums/showpost.php?p=36698872&postcount=2693"})}),"\n",(0,n.jsx)(t.h4,{id:"motor-soft-mount-idea",children:(0,n.jsx)(t.a,{href:"https://www.rcgroups.com/forums/showpost.php?p=37447636&postcount=48105",children:"Motor soft mount idea:"})}),"\n",(0,n.jsx)(t.h4,{id:"some-experiments-and-observations-from-aileron8",children:"Some experiments and observations from AILERON8:"}),"\n",(0,n.jsx)(t.p,{children:"I've found it's these lower frequencies where the soft motor mounts work best. Sometimes shifting the noise upward, but often eliminating it altogether. In addition to trying-out the dynamic notch filter on two quads I spent last weekend playing with my motor softmounts. Empirical testing only, e.g., quads with busted BB's at the moment unfortunately. I also noticed how the higher sounding prop resonance from one of my quads didn't change (as much) with motor soft mounting. My FC soft mounts seemed to be more effective at alleviating the mid-to-high frequencies of the singing unbalanced butter cutters I was testing. It was far from an exhaustive design of experiment, but there was definitely a trend where my silicone and/or rubber soft mounts helped to get rid of the lower motor and frame resonance without having to place additional BF filters. Using the same butters I also noticed how removing my gyro notches had a noticeable impact on mid throttle oscillation reduction as it related to the noisy props. At least on the one quad I was testing, and that's not the first time I've experienced this effect. I'm hoping to do more testing this upcoming weekend and finally get some BB logs to show cause & effect."}),"\n",(0,n.jsx)(t.p,{children:'Let me clarify on my first statement: not actually "shifting" the frequencies higher, but reducing the amplitude of the lower frequencies, leaving the higher frequency noise alone.'}),"\n",(0,n.jsx)(t.h2,{id:"adding-caps",children:"Adding Cap(s)"}),"\n",(0,n.jsx)(t.h4,{id:"thread-about-caps-for-noise-reduction-has-links-to-recommended-caps",children:"Thread about Caps for Noise reduction (has links to recommended Caps):"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.rcgroups.com/forums/showthread.php?2830948-Capacitors-for-noise-reduction",children:"https://www.rcgroups.com/forums/showthread.php?2830948-Capacitors-for-noise-reduction"})}),"\n",(0,n.jsx)(t.h4,{id:"post-by-swing3r",children:"Post by Swing3r"}),"\n",(0,n.jsx)(t.p,{children:"I had issues with yaw oscillation at mid throttle with Aikons + Lumenier 2206-2350KV-motors. Soft mounting helped but not fully so I also added a low ESR 1000uF 63V capacitor to my PDB (cycolone FC is powered by lipo directly) and viola, all traces of the yaw-oscillation is gone."}),"\n",(0,n.jsx)(t.h4,{id:"post-by-fftunes",children:"Post by fftunes"}),"\n",(0,n.jsx)(t.p,{children:"Just another small report of electrical noise: Friend built another all new quad with naze r6 which produced a weird high frequency hum, no matter what filters/PID etc were set to.\nA single cap (35v 470uf) to the pdb fixed it."}),"\n",(0,n.jsx)(t.h3,{id:"originally-posted-by-mnemennth-ad-nauseum",children:"Originally Posted by mnemennth: ad nauseum"}),"\n",(0,n.jsx)(t.p,{children:"Today's high-speed high-current ESCs are the electronic equivalent of a chainsaw running WOT, and your entire power supply has to juggle 4 of them at once. They used to have 330-470uF capacitors right on the ESC to clean up this noise, but everybody bitched that the ESCs were too big/long/fat/lumpy, so they started designing with big banks of tiny ceramic caps right on the ESC as a substitute."}),"\n",(0,n.jsx)(t.p,{children:"What they didn't realize was that ceramic caps are not the same as equivalent electrolytic caps due to a factor known as derating. At around the same time, we started demanding massive increases in both speed and current capacity from our ESCs... Ironically, we needed those big caps on the ESCs more than ever just at the time we got rid of them. We need to put that capacitance back on there one way or another."}),"\n",(0,n.jsx)(t.p,{children:"I recommend still installing a 1000uF 35V Low-ESR cap even if you are using a regulator to power your video equipment. Linear regulators can pass some very fast-acting spikes right through to the load they power, while switching regulators are prone to being themselves damaged by such voltage spikes; enough so that Pololu warns about the issue at the bottom of every one of their regulator listings."}),"\n",(0,n.jsxs)(t.p,{children:["This search returns only capacitors advertised as Low ESR, and only US vendors.\n",(0,n.jsx)(t.a,{href:"https://www.ebay.com/sch/i.html?_from=R40&_sacat=0&_nkw=1000uf+25v+low+ESR&LH_PrefLoc=1&_sop=15",children:"https://www.ebay.com/sch/i.html?_from=R40&_sacat=0&_nkw=1000uf+25v+low+ESR&LH_PrefLoc=1&_sop=15"})]}),"\n",(0,n.jsx)(t.p,{children:"Look for name brands like Panasonic, Sanyo, Nichicon or Rubycon. Pick a vendor with a price and ETA you like. To be sure you get low ESR you need to check the part # against the MFR website; Low-ESR/High Ripple current rated is what we want."}),"\n",(0,n.jsx)(t.p,{children:"There simply is no better way to spend 3 grams on a build."}),"\n",(0,n.jsx)(t.h3,{id:"list-of-soft-mounting-parts-from-sadleprechaun-",children:"List of Soft mounting parts from SadLeprechaun-"}),"\n",(0,n.jsxs)(t.p,{children:["I use this stuff for soft mounting/vibrations:\n",(0,n.jsx)(t.a,{href:"http://www.getfpv.com/motor-soft-mount-silicone-pad-w-3m-backing-set-of-4.html",children:"Motors"}),"\n",(0,n.jsx)(t.a,{href:"http://www.getfpv.com/anti-vibration-flight-controller-standoff-7mm.html",children:"stand offs"}),"\n",(0,n.jsx)(t.a,{href:"http://www.getfpv.com/multipurpose-o-ring-set-of-8.html",children:"o-rings (on top of standoffs)"}),"\n",(0,n.jsx)(t.a,{href:"http://www.getfpv.com/rtom-anti-vibration-moongel.html",children:"HD cam / escs:"}),"\n",(0,n.jsx)(t.a,{href:"https://www.amazon.com/dp/B00T2IA7MM?tag=viglink20264-20",children:"Cap for battery lead:"}),"\n",(0,n.jsx)(t.a,{href:"https://www.amazon.com/Panasonic-470uF-Radial-Electrolytic-Capacitor/dp/B00WOQ0ILE?tag=viglink20264-20",children:"Caps for ESCs: "}),"\nIt took all that and removing gyro notch filters / PT1 fix to get the F60 Pro quad to run without mid-throttle jitters. Each thing reduced them more and more."]}),"\n",(0,n.jsx)(t.h3,{id:"soft-mounting-parts-from-aileron8",children:"Soft mounting parts from AILERON8"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"http://pirofliprc.com/1mm-Medium-density-motor-soft-mounting-pad-10-pcs_p_3852.html",children:"motor mounts"}),"\nWhat I also like about the sticky rubber mounts is they're effective without having to stack them in multiples. Just one on top of the arm and a TPU soft mount underneath is enough to improve the noise profile. Especially for really powerful motors.\n",(0,n.jsx)(t.a,{href:"https://www.rcgroups.com/forums/showpost.php?p=37806019&postcount=550",children:"Pictures"})]}),"\n",(0,n.jsx)(t.h3,{id:"post-on-soft-motor-mounts",children:"Post on soft motor mounts:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.rcgroups.com/forums/showpost.php?p=37788454&postcount=49263",children:"https://www.rcgroups.com/forums/showpost.php?p=37788454&postcount=49263"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var n=o(67294);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);