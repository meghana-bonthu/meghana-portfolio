import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCode,
  faLayerGroup,
  faCloudArrowUp,
  faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const skillCapabilities: Record<string, string> = {
  "C#":
    "Build backend business logic, application services, API functionality, data-processing workflows, and maintainable object-oriented application code.",

  ".NET":
    "Build modern backend and full-stack applications using the .NET ecosystem, including web APIs, application services, background processing, and enterprise application workflows.",

  ".NET Core":
    "Build cross-platform backend applications, APIs, services, and enterprise application components using the modern .NET development ecosystem.",

  "ASP.NET Core":
    "Build REST APIs and backend services with routing, middleware, dependency injection, authentication, authorization, validation, and application business logic.",

  "Angular":
    "Build responsive web interfaces using reusable components, services, routing, forms, API integration, and role-aware application workflows.",

  "TypeScript":
    "Build strongly typed frontend components, services, API models, reusable application logic, and maintainable client-side functionality.",

  "SQL Server":
    "Build relational data solutions using structured schemas, queries, relationships, transactions, and reliable application data persistence.",

  "EF Core":
    "Build data-access layers that connect .NET applications to relational databases using entities, relationships, queries, migrations, and strongly typed data operations.",

  "REST APIs":
    "Build HTTP-based interfaces that allow frontend applications and backend services to securely exchange, retrieve, create, and update application data.",

  "Microservices":
    "Build applications as smaller, focused service components with clearly defined responsibilities and API-based communication between different parts of the system.",

  "CI/CD":
    "Build automated software delivery workflows that compile, test, validate, and prepare application changes for consistent and reliable delivery."
};

const heywoodTechnologies = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Angular",
  "TypeScript",
  "SQL Server",
  "EF Core",
  "REST APIs",
  "CI/CD"
];

const accentureTechnologies = [
  "C#",
  ".NET Core",
  "ASP.NET Core",
  "Angular",
  "TypeScript",
  "SQL Server",
  "EF Core",
  "REST APIs",
  "Microservices",
  "CI/CD"
];

function Timeline() {
  const [selectedSkill, setSelectedSkill] =
    useState<string | null>(null);

  return (
    <div id="history">
      <div className="items-container experience-container">

        <div className="experience-heading">
          <span className="experience-eyebrow">Career Journey</span>

          <h1>Professional Experience</h1>

          <p>
            Building modern full-stack applications across backend services,
            responsive web interfaces, data-driven workflows, cloud technologies,
            and software delivery.
          </p>
        </div>

        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#171b22',
              color: 'white'
            }}
            contentArrowStyle={{
              borderRight: '7px solid #171b22'
            }}
            date="Oct 2024 - Present"
            iconStyle={{
              background: '#6d28d9',
              color: 'white'
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >

            <div className="experience-card-header">
              <div>
                <span className="experience-status">
                  Current Role
                </span>

                <h3 className="vertical-timeline-element-title">
                  .NET Full Stack Developer
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  Heywood Healthcare
                </h4>
              </div>
            </div>

            <p className="experience-summary">
              Building and maintaining enterprise full-stack applications
              across backend APIs, modern web interfaces, data access,
              application delivery, and production support.
            </p>

            <div className="experience-highlights">

              <div className="experience-highlight">
                <FontAwesomeIcon icon={faCode} />

                <div>
                  <strong>Backend Engineering</strong>
                  <span>
                    Develop application functionality and REST APIs using
                    C#, .NET, and ASP.NET Core.
                  </span>
                </div>
              </div>

              <div className="experience-highlight">
                <FontAwesomeIcon icon={faLayerGroup} />

                <div>
                  <strong>Full-Stack Development</strong>
                  <span>
                    Build responsive frontend functionality with Angular
                    and TypeScript while integrating frontend and backend
                    application workflows.
                  </span>
                </div>
              </div>

              <div className="experience-highlight">
                <FontAwesomeIcon icon={faScrewdriverWrench} />

                <div>
                  <strong>Data & Application Support</strong>
                  <span>
                    Work with SQL Server and Entity Framework Core while
                    contributing to troubleshooting, performance improvements,
                    and application support.
                  </span>
                </div>
              </div>

              <div className="experience-highlight">
                <FontAwesomeIcon icon={faCloudArrowUp} />

                <div>
                  <strong>Delivery & Engineering Productivity</strong>
                  <span>
                    Contribute to cloud-ready development, CI/CD workflows,
                    and AI-assisted software development practices.
                  </span>
                </div>
              </div>

            </div>

            <div className="experience-tech">
              {heywoodTechnologies.map((technology) => (
                <button
                  key={technology}
                  type="button"
                  className="experience-tech-button"
                  onClick={() => setSelectedSkill(technology)}
                >
                  {technology}
                </button>
              ))}
            </div>

          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#171b22',
              color: 'white'
            }}
            contentArrowStyle={{
              borderRight: '7px solid #171b22'
            }}
            date="May 2021 - Dec 2023"
            iconStyle={{
              background: '#6d28d9',
              color: 'white'
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >

            <div className="experience-card-header">
              <div>
                <h3 className="vertical-timeline-element-title">
                  Advanced Associate Software Engineer
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  Accenture
                </h4>
              </div>
            </div>

            <p className="experience-summary">
              Contributed to enterprise application development across
              backend services, frontend features, database integration,
              delivery pipelines, and production support within
              cross-functional Agile teams.
            </p>

            <div className="experience-highlights">

              <div className="experience-highlight">
                <FontAwesomeIcon icon={faCode} />

                <div>
                  <strong>.NET Development</strong>
                  <span>
                    Developed application functionality using C#,
                    .NET Core, ASP.NET Core, and REST APIs.
                  </span>
                </div>
              </div>

              <div className="experience-highlight">
                <FontAwesomeIcon icon={faLayerGroup} />

                <div>
                  <strong>Frontend Engineering</strong>
                  <span>
                    Built and maintained frontend functionality using
                    Angular and TypeScript while integrating with
                    backend services.
                  </span>
                </div>
              </div>

              <div className="experience-highlight">
                <FontAwesomeIcon icon={faScrewdriverWrench} />

                <div>
                  <strong>Data & Services</strong>
                  <span>
                    Worked with SQL Server, Entity Framework Core,
                    REST APIs, and microservice-based application
                    components.
                  </span>
                </div>
              </div>

              <div className="experience-highlight">
                <FontAwesomeIcon icon={faCloudArrowUp} />

                <div>
                  <strong>Delivery & Support</strong>
                  <span>
                    Collaborated with Agile teams on CI/CD,
                    application performance improvements,
                    troubleshooting, and production support.
                  </span>
                </div>
              </div>

            </div>

            <div className="experience-tech">
              {accentureTechnologies.map((technology) => (
                <button
                  key={technology}
                  type="button"
                  className="experience-tech-button"
                  onClick={() => setSelectedSkill(technology)}
                >
                  {technology}
                </button>
              ))}
            </div>

          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>

      {selectedSkill && (
        <div
          className="experience-modal-overlay"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="experience-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="experience-modal-close"
              aria-label="Close skill details"
              onClick={() => setSelectedSkill(null)}
            >
              ×
            </button>

            <span className="experience-modal-eyebrow">
              What I Can Build
            </span>

            <h2 id="experience-modal-title">
              {selectedSkill}
            </h2>

            <p>
              {skillCapabilities[selectedSkill]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Timeline;
