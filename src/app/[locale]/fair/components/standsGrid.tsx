"use client";

import React from "react";
import Image from "next/image";

export default function StandsGrid() {
  return (
    <div className="relative z-20 w-full max-w-4xl mx-auto px-8 my-12">
      
      <section className="w-full p-6 bg-[#1C1224] text-white rounded-3xl shadow-2xl border border-white/5">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Stands</h2>

        <div className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* CHEMISTRY + RETRO GAMES */}
          <div className="flex flex-col gap-4 col-span-1">
            
            {/* CHEMISTRY */}
            <div className="aspect-square relative group overflow-hidden rounded-2xl bg-[#110a18] border-4 border-[#5863FF] transition-transform duration-300 hover:scale-[1.04]">

              <div className="absolute top-[8%] left-[8%] w-[75%] z-20 pointer-events-none">
                <h3 className="font-bold text-white mb-[2%] leading-tight text-[clamp(1.0rem,4.5vw,2.5rem)] md:text-[clamp(1rem,2.5vw,1.5rem)]">
                  Chemistry
                </h3>
                <div className="text-gray-300 leading-tight space-y-[2px]">
                   <p className="text-[clamp(0.3rem,2.5vw,1.4rem)] md:text-[clamp(0.6rem,1.5vw,0.8rem)]">Science Sorcery</p>
                   <p className="text-[clamp(0.3rem,2.5vw,1.4rem)] md:text-[clamp(0.6rem,1.5vw,0.8rem)]">Frozen Wonders</p>
                   <p className="text-[clamp(0.3rem,2.5vw,1.4rem)] md:text-[clamp(0.6rem,1.5vw,0.8rem)]">Live Demos</p>
                </div>
              </div>

              <div className="absolute top-[20%] right-[5%] w-[20%] h-[20%] pointer-events-none opacity-90">
                <Image src="/sciencefair/fulgi.svg" alt="Snowflakes" fill className="object-contain" style={{ imageRendering: 'pixelated' }}/>
              </div>
              <div className="absolute bottom-[0%] left-[6%] w-[42%] h-[36%] pointer-events-none">
                <Image src="/sciencefair/pipete.svg" alt="Pipettes" fill className="object-contain object-bottom object-left" style={{ imageRendering: 'pixelated' }}/>
              </div>
              <div className="absolute bottom-[8%] right-[6%] w-[45%] h-[45%] pointer-events-none">
                <Image src="/sciencefair/eprubeta_mare.svg" alt="Large Flask" fill className="object-contain object-bottom object-right" style={{ imageRendering: 'pixelated' }}/>
              </div>

            </div>

            {/* RETRO GAMES */}
            <div className="aspect-square relative group overflow-hidden rounded-2xl bg-gradient-to-t from-[#5863FF] to-[#353B99] border-4 border-black transition-transform duration-300 hover:scale-[1.04]">
               
               <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                  <Image 
                    src="/sciencefair/background_games.png" 
                    alt="Noise Texture" 
                    fill 
                    className="object-cover"
                  />
               </div>
               
               <div className="absolute top-[8%] left-[8%] z-20 pointer-events-none">
                 <h3 className="text-white leading-tight text-[clamp(1.0rem,4.5vw,2.5rem)] md:text-[clamp(1rem,2.5vw,1.5rem)]">
                    Retro<br/>Games
                 </h3>
               </div>
               
               <div className="absolute bottom-[-1.3%] left-0 w-full h-[55%] z-10 pointer-events-none">
                  <Image 
                    src="/sciencefair/terrain.svg" 
                    alt="Terrain" 
                    fill 
                    className="object-contain object-bottom"
                    style={{ imageRendering: 'pixelated' }}
                  />
               </div>

               <div className="absolute bottom-[52%] right-[8%] w-[35%] h-[35%] z-20 pointer-events-none">
                  <Image 
                    src="/sciencefair/MegaMan.svg" 
                    alt="Mega Man" 
                    fill 
                    className="object-contain object-bottom"
                  />
               </div>
            </div>
          </div>

          {/* CIRCUIT */}
          <div className="col-span-1 aspect-square min-[375px]:aspect-auto min-[375px]:h-auto relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#5863FF] to-[#2A2F7D] transition-transform duration-300 hover:scale-[1.02]">
            
            <div className="absolute top-[5%] left-[9%] w-[75%] z-20 pointer-events-none">
              <h3 className="font-bold text-white mb-[2%] leading-tight text-[clamp(1.0rem,4.5vw,2.5rem)] md:text-[clamp(1rem,2.5vw,1.5rem)]">
                Electronics
              </h3>
              <div className="text-gray-300 leading-tight">
                <p className="text-[clamp(0.8rem,3.5vw,1.8rem)] md:text-[clamp(1.0rem,1.5vw,1.2rem)]">
                  Featuring<br/>Alacrity Airbox
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-[80%] max-[375px]:scale-x-175 pointer-events-none">
               <Image 
                 src="/sciencefair/circuit.svg" 
                 alt="Circuit Board" 
                 fill 
                 className="object-contain object-bottom"
               />
            </div>
          </div>

          {/* VEXU ROBOTICS */}
          <div className="col-span-1 aspect-square min-[375px]:col-span-2 min-[375px]:aspect-square md:aspect-auto md:h-auto relative overflow-hidden rounded-2xl bg-[#0a0a12] border-4 border-[#5863FF] transition-transform duration-300 hover:scale-[1.01]">
            
            <div className="absolute inset-0 z-0 pointer-events-none">
               <Image 
                 src="/sciencefair/background_vexu.png" 
                 alt="City Background" 
                 fill 
                 className="object-cover opacity-80"
               />
            </div>

            <div className="absolute top-[3%] left-[4%] z-30 pointer-events-none max-w-[60%]">
                <p className="text-[clamp(1.0rem,4.5vw,2.5rem)] md:text-[clamp(1rem,2.5vw,1.5rem)]">VEXU Robotics Team</p>
                <h3 className="font-bold text-white text-[clamp(1.5rem,5vw,2.25rem)] md:text-[clamp(1.25rem,3vw,3rem)]">
                    RAVEN1
                </h3>
                <p className="text-[clamp(0.8rem,3.5vw,1.8rem)] md:text-[clamp(0.8rem,1.5vw,1.0rem)] leading-none mt-2">
                  Meet one of the first VEXU<br/> Robotics Team in Europe.
                </p>
            </div>

            <div className = "absolute bottom-[18.25%] right-[-21%] w-[85%] h-[85%] pointer-events-none">
              <div className="relative w-full h-full">
              <Image src="/sciencefair/batman.svg" alt="Batman" fill className="object-contain object-bottom-left" />
              </div>
            </div>

            <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[60%] z-20 pointer-events-none">
               <div className="absolute bottom-[5%] left-[38%] w-[80%] h-[80%]">
                  <Image src="/sciencefair/robotic_hand_2.svg" alt="Robot Arm Small" fill className="object-contain object-bottom-left" />
               </div>
               <div className="absolute bottom-[5%] left-[10%] w-full h-full">
                  <Image src="/sciencefair/robotic_hand_1.svg" alt="Robot Arm Large" fill className="object-contain object-bottom-left" />
               </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}