"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, TrendingUp, User } from "lucide-react"

interface BaseballStat {
    label: string
    value: string | number
    description?: string
}

interface BaseballPlayerProps {
    name: string
    team: string
    position: string
    imageUrl?: string
    jerseyNumber: string | number
    battingStats: BaseballStat[]
    fieldingStats: BaseballStat[]
    careerHighlights?: string[]
}

export default function BaseballPlayerStats({
    name = "Mike Trout",
    team = "Los Angeles Angels",
    position = "Center Field",
    imageUrl = "/placeholder.svg?height=100&width=100",
    jerseyNumber = "27",
    battingStats = [
        { label: "AVG", value: ".303", description: "Batting Average" },
        { label: "HR", value: 368, description: "Home Runs" },
        { label: "RBI", value: 940, description: "Runs Batted In" },
        { label: "OBP", value: ".415", description: "On-Base Percentage" },
        { label: "SLG", value: ".583", description: "Slugging Percentage" },
        { label: "OPS", value: ".998", description: "On-Base Plus Slugging" },
    ],
    fieldingStats = [
        { label: "FLD%", value: ".993", description: "Fielding Percentage" },
        { label: "RF", value: "2.34", description: "Range Factor" },
        { label: "DRS", value: 47, description: "Defensive Runs Saved" },
    ],
    careerHighlights = [
        "3× American League MVP (2014, 2016, 2019)",
        "10× MLB All-Star (2012–2019, 2021, 2022)",
        "8× Silver Slugger Award (2012–2016, 2018, 2019, 2022)",
    ],
}: BaseballPlayerProps) {
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border-2 border-primary">
                        <AvatarImage src={imageUrl} alt={name} />
                        <AvatarFallback className="text-lg font-bold">{jerseyNumber}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-2xl">{name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                            <span className="font-medium text-primary">{team}</span> • {position}
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="batting" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="batting" className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4" />
                            <span className="hidden sm:inline">Batting</span>
                        </TabsTrigger>
                        <TabsTrigger value="fielding" className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span className="hidden sm:inline">Fielding</span>
                        </TabsTrigger>
                        <TabsTrigger value="highlights" className="flex items-center gap-1">
                            <Trophy className="h-4 w-4" />
                            <span className="hidden sm:inline">Highlights</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="batting" className="mt-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {battingStats.map((stat) => (
                                <div key={stat.label} className="p-3 border rounded-lg">
                                    <div className="text-2xl font-bold">{stat.value}</div>
                                    <div className="text-sm font-medium">{stat.label}</div>
                                    {stat.description && <div className="text-xs text-muted-foreground">{stat.description}</div>}
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="fielding" className="mt-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {fieldingStats.map((stat) => (
                                <div key={stat.label} className="p-3 border rounded-lg">
                                    <div className="text-2xl font-bold">{stat.value}</div>
                                    <div className="text-sm font-medium">{stat.label}</div>
                                    {stat.description && <div className="text-xs text-muted-foreground">{stat.description}</div>}
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="highlights" className="mt-4">
                        <div className="space-y-2">
                            {careerHighlights?.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <Trophy className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                                    <p>{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

