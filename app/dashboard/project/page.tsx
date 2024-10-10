"use client";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
} from "@/components/ui/select";

const Team1 = [
    { name: "Project1", value: "Project1" },
    { name: "Project2", value: "Project2" },
    { name: "Project3", value: "Project3" },
    { name: "Project4", value: "Project4" },
];
const Team2 = [
    { name: "a", value: "a" },
    { name: "b", value: "b" },
    { name: "c", value: "c" },
    { name: "d", value: "d" },
];
const Team3 = [
    { name: "e", value: "e" },
    { name: "f", value: "f" },
    { name: "g", value: "g" },
    { name: "h", value: "h" },
];
const Team4 = [
    { name: "i", value: "i" },
    { name: "j", value: "j" },
    { name: "k", value: "k" },
    { name: "l", value: "l" },
];

const Teams = [Team1, Team2, Team3, Team4];

const ProjectPage = () => {
    const it = 1;
    return (
        <div className="flex gap-8">
            <div>
                <Select>
                    <SelectTrigger className="w-[250px]">
                        <SelectValue placeholder="Select a Project" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {[...Array(4)].map((_, index) => {
                                const team = Teams[index];
                                return (
                                    <SelectGroup key={index}>
                                        <SelectLabel>
                                            Team {index + 1}
                                        </SelectLabel>
                                        {team.map((item) => (
                                            <SelectItem
                                                key={item.name}
                                                value={item.value}
                                            >
                                                {item.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                );
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Button variant={"outline"} className="text-primary">
                    Create Team
                </Button>
            </div>
            <div>
                <Button>New Project</Button>
            </div>
        </div>
    );
};

export default ProjectPage;
