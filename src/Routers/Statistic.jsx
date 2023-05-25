import TittleBanner from "../Components/TitleBanner/TittleBanner";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';


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
            <div className="flex  justify-center sm:justify-between  py-10 container mx-auto px-10 gap-10 flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 ">
                    <RadarChart width={300} height={300} cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="assignmentNumber" />
                        <PolarRadiusAxis />
                        <Tooltip />
                        <Radar name="A" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </div>
            </div>
        </div>
    );
};

export default Statistic;