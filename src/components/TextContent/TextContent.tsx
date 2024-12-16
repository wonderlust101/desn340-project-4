import "./TextContent.scss";

import TextNavigation from "./TextNavigation";
import TextSection from "./TextSection";

type textContentProps = {
    textContent: TextSection[];
}

export default function TextContent({textContent}: textContentProps) {

    return (
        <section className="text-content">
            <TextNavigation textContent={textContent}/>

            <div className="text-content__main-content">
                {textContent.map((section, index) => (
                    <TextSection
                        key={index}
                        header={section.header}
                        sectionNumber={index + 1}
                        subHeader={section.subHeader}
                        text={section.text}
                        button={section.button}
                    />
                ))}
            </div>
        </section>
    );
}