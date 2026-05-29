"use client"
import React, { useEffect, useState, useRef } from "react"
import { animate, stagger } from "animejs"

export default function BackgroundGrid() {
  const [gridDimensions, setGridDimensions] = useState({ columns: 0, rows: 0 })
  const containerRef = useRef(null)

  // Tweak this to make the grid squares larger or smaller
  const CELL_SIZE = 65
  const MAX_GRID_WIDTH = 800

  useEffect(() => {
    const calculateGrid = () => {
      const availableWidth = Math.min(window.innerWidth * 0.9, MAX_GRID_WIDTH)
      const availableHeight = window.innerHeight * 1.1

      const columns = Math.floor(availableWidth / CELL_SIZE)
      const rows = Math.floor(availableHeight / CELL_SIZE)
      setGridDimensions({ columns, rows })
    }

    // Calculate immediately on first load
    calculateGrid()

    // Debounce logic: only recalculate 200ms AFTER the user stops resizing
    let timeoutId: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        calculateGrid()
      }, 200)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (gridDimensions.columns > 0 && gridDimensions.rows > 0) {
      // 2. V4 Animation Syntax: animate(target, parameters)
      animate(".grid-dot", {
        scale: [0, 1],
        opacity: [0, 1],
        // stagger is called directly
        delay: stagger(40, {
          grid: [gridDimensions.columns, gridDimensions.rows],
          from: "center",
        }),
        duration: 800,
        // 'ease' instead of 'easing', and standard naming (outBack instead of easeOutBack)
        ease: "outBack",
      })
    }
  }, [gridDimensions])

  const totalCells = gridDimensions.columns * gridDimensions.rows
  const cells = Array.from({ length: totalCells })

  return (
    <div
      ref={containerRef}
      // Dark theme background. Swap 'bg-slate-950' for 'bg-white' if you prefer light mode!
      className="fixed items-center justify-center inset-0 z-[-1] overflow-hidden bg-white pointer-events-none"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridDimensions.columns}, ${CELL_SIZE}px)`,
        gridTemplateRows: `repeat(${gridDimensions.rows}, ${CELL_SIZE}px)`,
      }}
    >
      {cells.map((_, i) => (
        <div
          key={i}
          // The borders create the grid lines. Swap 'border-white/10' for 'border-gray-200' for light mode.
          className={`relative border-gray-200 
            ${(i + 1) % gridDimensions.columns !== 0 ? "border-r" : ""}
            ${i < (gridDimensions.rows - 1) * gridDimensions.columns ? "border-b" : ""}
        `}
          style={{ width: CELL_SIZE, height: CELL_SIZE }}
        >
          {/* The dots sit exactly on the intersections */}
          {(i + 1) % gridDimensions.columns !== 0 &&
            i < (gridDimensions.rows - 1) * gridDimensions.columns && (
              <div
                className="grid-dot absolute rounded-full bg-gray-600 z-10" // Swap to 'bg-gray-800' for light mode
                style={{
                  width: "4px",
                  height: "4px",
                  right: "-2.5px", // Centers the dot over the 1px border
                  bottom: "-2.5px",
                  opacity: 0, // Starts invisible so anime.js can fade it in
                }}
              />
            )}
        </div>
      ))}
    </div>
  )
}
