"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionTooltipProps{
    label:string,
    children:React.ReactNode,
    side?:"top"|"right"|"bottom"|"left"
    aligin?:"start" | "end" | "center"
}

export const ActionTooltip =({label,children,side,aligin}:ActionTooltipProps) =>{
return (
    <TooltipProvider>
        <Tooltip delayDuration={50}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger >
            <TooltipContent side={side} align={aligin}>
                <p className="font-semibold text-sm capitalize">
                    {label.toLowerCase()}
                </p>
                
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
)
}