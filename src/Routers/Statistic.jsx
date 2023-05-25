import TittleBanner from "../Components/TitleBanner/TittleBanner";
import { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Statistic = () => {
    const data = [
        { "assignmentNumber": 'Assignment 1', "marks": 80 },
        { "assignmentNumber": 'Assignment 2', "marks": 90 },
        { "assignmentNumber": 'Assignment 3', "marks": 75 },
        { "assignmentNumber": 'Assignment 4', "marks": 85 },
        { "assignmentNumber": 'Assignment 5', "marks": 95 },
        { "assignmentNumber": 'Assignment 6', "marks": 70 }
    ]
    return (
        <div>
            <TittleBanner>Statistic</TittleBanner>
            {/* RadarChart */}
            <div className="flex justify-between  py-10 container mx-auto px-10">
                <RadarChart width={500} height={500} cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="assignmentNumber" />
                    <PolarRadiusAxis />
                    <Tooltip />
                    <Radar name="A" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
                <LineChart width={500} height={400} data={data}>
                    <XAxis dataKey="assignmentNumber" />
                    <YAxis />
                    <CartesianGrid stroke="#ff23ff" />
                    <Tooltip />
                    <Line type="monotone" dataKey="marks" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistic;