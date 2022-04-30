import reactStringReplace from 'react-string-replace';

import React from 'react';
import { BulletLink, Experience, ExperienceBullet } from './../models';

interface ExperienceProps {
    experiences: Experience[];
};

function renderBullet(bullet: string | ExperienceBullet) {
    const experienceBullet = (bullet as ExperienceBullet);
    if (experienceBullet.text) {
        let result = experienceBullet.text;
        experienceBullet.links?.forEach(link => {
            result = reactStringReplace(
                result, 
                link.text, 
                (match, i) => <a href={link.link} target="_blank">{link.text}</a>);
        });
        return result;
    } else {
        return bullet;
    }
}

const ExperienceSection = ({ experiences }: ExperienceProps) => {
    const renderedExperiences = experiences.map((experience: Experience) =>
        <li className="experience-item" key={experience.company}>
            <div className="summary">
                <div className="info">
                    <h3>{experience.company}</h3>
                    <h4>{experience.jobTitle}</h4>
                </div>
                <div className="context">
                    <div className="when">
                        {experience.startDate} &mdash; {experience.endDate}
                    </div>
                    <div className="where">
                        {experience.location}
                    </div>
                </div>
            </div>
            <ul className="details">
                {experience.bullets.map((bullet) => {
                    return <li key={bullet}>{renderBullet(bullet)}</li>;
                })}
            </ul>
        </li>
    );

    return (
        <div className="experience">
            <h2>Experience</h2>
            <ul className="experience-list">
                {renderedExperiences}
            </ul>
        </div>
    );
};

export default ExperienceSection;