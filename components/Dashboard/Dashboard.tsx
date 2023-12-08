"use client";
import { NumberStats } from "@/constants";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
import { VictoryChart, VictoryLine } from "victory";
// import { VictoryChart } from "victory-chart";
import Image from "next/image";
import styles from "./Dashboard.module.css";

const data = [
  { x: 5, y: 43000 },
  { x: 10, y: 40000 },
  { x: 15, y: 48000 },
  { x: 20, y: 47000 },
  { x: 25, y: 41000 },
  { x: 30, y: 37000 },
  { x: 35, y: 48000 },
  { x: 40, y: 42000 },
  { x: 45, y: 34000 },
  { x: 50, y: 38000 },
  { x: 55, y: 39000 },
  { x: 60, y: 44000 },
  { x: 65, y: 47000 },
  { x: 70, y: 49000 },
  { x: 75, y: 44000 },
];

export default function Dashboard() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.headingWrapper}>
        <p className={styles.name}>Hi, Pristia</p>
        <p className={styles.subHeading}>This is your HR report so far</p>
      </div>

      <div className={styles.performance}>
        <div className={styles.numberStats}>
          {NumberStats.map((stats, index) => (
            <div
              key={index}
              className={`${styles.numberStat} ${
                !index
                  ? styles.borderRightBottom
                  : index === 1
                  ? styles.borderBottom
                  : index === 2
                  ? styles.borderRight
                  : ""
              }`}
            >
              <div className={styles.statsIconWrapper}>
                <div className={styles.skeleton} />
                <Image
                  src={stats.icon}
                  alt="stats icon"
                  width={20}
                  height={20}
                  className={styles.statsIcon}
                />
              </div>

              <div className={styles.growth}>
                <div className={styles.skeleton} />
                <p className={styles.growthNumber}>{stats.value}</p>

                <div
                  className={`${styles.growthPercent} ${
                    !stats.isTendingUp && styles.growthReduce
                  }`}
                >
                  <Image
                    src={
                      stats.isTendingUp
                        ? "/assets/trending-up.svg"
                        : "/assets/trending-down.svg"
                    }
                    alt="stats icon"
                    width={20}
                    height={20}
                    className={stats.isTendingUp ? styles.upTrend : ""}
                  />
                  <p
                    className={`${styles.trendText} ${
                      !stats.isTendingUp && styles.trendDownText
                    }`}
                  >
                    {stats.percentGrowth}
                  </p>
                </div>
              </div>

              <div className={styles.statNameWrapper}>
                <div className={styles.skeleton} />
                <p className={styles.statName}>{stats.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.graph}>
          <p className={styles.graphTitle}>Team Performance</p>

          <VictoryChart>
            <VictoryLine
              interpolation={"natural"}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              style={{
                data: { stroke: "#FFC837", strokeWidth: 2 },
                parent: { border: "1px solid red" },
              }}
              data={data}
            />
          </VictoryChart>
        </div>
      </div>
    </main>
  );
}
