import OurStory from "../components/OurStory";
import StatisticCard from "../components/StatisticCard";
import TeamMember from "../components/TeamMember";
import Delivery from "../components/Delivery";
import BackButton from "../shared/backbutton/BackButton";
function About() {
    return(
        <div>
            
            <OurStory/>
            <StatisticCard/>
            <TeamMember/>
            <Delivery/>
        </div>
    );
}
export default About;