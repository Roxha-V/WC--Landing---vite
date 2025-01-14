import React from "react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-600 mb-8">{project.description}</p>

          {/* Project Image */}
          <div className="aspect-video bg-gray-800 mb-8 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">Roles</h3>
              <p className="text-gray-600">{project.roles.join(" • ")}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Timeline</h3>
              <p className="text-gray-600">{project.timeline}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">Tecnologías Front End</h3>
              <p className="text-gray-600">{project.frontendTech}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Tecnologías Back End</h3>
              <p className="text-gray-600">{project.backendTech}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-md text-center hover:bg-gray-50 transition-colors"
            >
              Cerrar
            </button>
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-md text-center hover:bg-gray-800 transition-colors"
              >
                Visitar sitio
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
