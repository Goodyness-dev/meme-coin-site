"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const data = [
  { name: "Community", value: 50 },
  { name: "Liquidity", value: 30 },
  { name: "Team Admins", value: 10 },
  {name: "Game and Tech", value: 10 }

];

// Darker neon colors
const COLORS = ["#5a189a", "#0ff0fc", "#ff1493"]; 

export default function TokenomicsChart() {
  useEffect(() => {
    gsap.to(".neon-chart", {
      filter: "drop-shadow(0 0 25px #9d4edd)",
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
  }, []);

  return (
    <div className="relative neon-chart w-full max-w-md mx-auto mt-10">
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={90} 
            outerRadius={130}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

        
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              color: "#fff",
              boxShadow: "0 0 15px #9d4edd",
              border: "none",
              borderRadius: "8px",
            }}
            itemStyle={{
              color: "#0ff0fc",
              textShadow: "0 0 5px #0ff0fc",
            }}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            layout="vertical"
            wrapperStyle={{
              marginTop: "20px",
              color: "#fff",
              textAlign: "center",
              lineHeight: "1.8rem",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

    
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
       <div className="w-[160px] h-[160px] rounded-full overflow-hidden shadow-[0_0_25px_#9d4edd]">
        <Image
          src="/pablo'simage.jpg"
          alt="Coin Logo"
          width={160}
          height={160}
          className="rounded-full shadow-[0_0_20px_#9d4edd]"
        />
        </div>
      </div>
    </div>
  );
}
