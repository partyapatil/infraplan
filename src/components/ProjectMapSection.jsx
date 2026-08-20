import  { useMemo, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import {
  Search,
  X,
  ChevronRight,
  Building2,
  Map as MapIcon,
  CheckCircle2,
} from "lucide-react";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const projects = [
  {
    id: 1,
    name: "Junnar",
    state: "Maharashtra",
    country: "India",
    type: "City Development",
    description: "City Development plan and City Sanitation Plan",
    status: "Completed",
    coordinates: [19.2086, 73.8752],
  },
  {
    id: 2,
    name: "Kadegaon",
    state: "Maharashtra",
    country: "India",
    type: "City Development",
    description: "City Development plan and City Sanitation Plan",
    status: "Completed",
    coordinates: [17.2833, 74.3333],
  },
  {
    id: 3,
    name: "Kavathe Mahankal",
    state: "Maharashtra",
    country: "India",
    type: "City Development",
    description: "City Development plan and City Sanitation Plan",
    status: "Ongoing",
    coordinates: [16.9667, 74.8667],
  },
  {
    id: 4,
    name: "Murgud",
    state: "Maharashtra",
    country: "India",
    type: "City Development",
    description: "City Development plan and City Sanitation Plan",
    status: "Completed",
    coordinates: [16.3967, 74.1917],
  },
  {
    id: 5,
    name: "Manaj",
    state: "Maharashtra",
    country: "India",
    type: "Water Infrastructure",
    description: "Water supply and infrastructure development project",
    status: "Completed",
    coordinates: [16.85, 74.6],
  },
  {
    id: 6,
    name: "Pune",
    state: "Maharashtra",
    country: "India",
    type: "Water Infrastructure",
    description: "Urban water infrastructure and engineering services",
    status: "Ongoing",
    coordinates: [18.5204, 73.8567],
  },
];

function FlyToProject({ project }) {
  const map = useMap();

  useEffect(() => {
    if (project) {
      map.flyTo(project.coordinates, 11, {
        duration: 0.8,
      });
    }
  }, [project, map]);

  return null;
}

export default function ProjectMapSection() {
  const [selectedProject, setSelectedProject] = useState(projects[2]);
  const [search, setSearch] = useState("");
  const [showDetails, setShowDetails] = useState(true);

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return projects;

    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(query) ||
        project.state.toLowerCase().includes(query) ||
        project.type.toLowerCase().includes(query)
    );
  }, [search]);

  const countries = new Set(projects.map((project) => project.country)).size;
  const states = new Set(projects.map((project) => project.state)).size;

  const selectProject = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  return (
    <section className="w-full bg-white py-10 sm:py-12">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-12">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-700">
          <MapIcon size={12} />
          Our Work
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
          Project{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Map
          </span>
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm">
          Explore our projects across locations and discover the engineering
          solutions delivered by InfraPlan.
        </p>
      </div>

      {/* =====================================================
          MAP APPLICATION
      ====================================================== */}

      <div className="mx-auto mt-7 max-w-[1500px] px-3 sm:px-5 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5">
          <div className="grid min-h-[440px] lg:grid-cols-[250px_minmax(0,1fr)_290px]">

            {/* =================================================
                LEFT PROJECT LIST
            ================================================== */}

            <aside className="z-20 flex max-h-[440px] flex-col border-b border-slate-200 bg-white lg:border-b-0 lg:border-r">

              {/* Stats */}

              <div className="grid grid-cols-3 border-b border-slate-100">
                <div className="px-2 py-3 text-center">
                  <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">
                    Countries
                  </p>
                  <p className="mt-0.5 text-base font-bold text-blue-700">
                    {countries}
                  </p>
                </div>

                <div className="border-x border-slate-100 px-2 py-3 text-center">
                  <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">
                    States
                  </p>
                  <p className="mt-0.5 text-base font-bold text-blue-700">
                    {states}
                  </p>
                </div>

                <div className="px-2 py-3 text-center">
                  <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">
                    Projects
                  </p>
                  <p className="mt-0.5 text-base font-bold text-blue-700">
                    {projects.length}
                  </p>
                </div>
              </div>

              {/* Search */}

              <div className="border-b border-slate-100 p-2.5">
                <div className="relative">
                  <Search
                    size={14}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search project..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-7 text-[10px] text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* Project Type Heading */}

              <div className="px-3 py-2.5">
                <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Project Types
                </p>
              </div>

              {/* Project List */}

              <div className="min-h-0 flex-1 overflow-y-auto">
                {filteredProjects.length ? (
                  filteredProjects.map((project, index) => {
                    const active = selectedProject?.id === project.id;

                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => selectProject(project)}
                        className={`group flex w-full items-start gap-2 border-b border-slate-100 px-3 py-2 text-left transition-all ${
                          active
                            ? "bg-blue-50/80"
                            : "bg-white hover:bg-slate-50"
                        }`}
                      >
                        <span className="mt-0.5 w-3 shrink-0 text-[8px] font-medium text-slate-400">
                          {index + 1}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p
                              className={`truncate text-[11px] font-semibold ${
                                active
                                  ? "text-blue-700"
                                  : "text-slate-800"
                              }`}
                            >
                              {project.name}
                            </p>

                            <ChevronRight
                              size={12}
                              className={`shrink-0 transition-transform ${
                                active
                                  ? "translate-x-0.5 text-blue-600"
                                  : "text-slate-300 group-hover:translate-x-0.5"
                              }`}
                            />
                          </div>

                          <p className="mt-0.5 text-[9px] text-slate-400">
                            {project.state}, {project.country}
                          </p>

                          <p className="mt-0.5 line-clamp-2 text-[9px] leading-3.5 text-slate-500">
                            {project.description}
                          </p>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="px-5 py-8 text-center">
                    <Search size={20} className="mx-auto text-slate-300" />

                    <p className="mt-2 text-[10px] font-medium text-slate-500">
                      No projects found
                    </p>
                  </div>
                )}
              </div>
            </aside>

            {/* =================================================
                MAP
            ================================================== */}

            <div className="relative h-[360px] lg:h-[440px]">
              <MapContainer
                center={[18.7, 74.1]}
                zoom={7}
                scrollWheelZoom
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FlyToProject project={selectedProject} />

                {projects.map((project) => {
                  return (
                    <Marker
                      key={project.id}
                      position={project.coordinates}
                      eventHandlers={{
                        click: () => selectProject(project),
                      }}
                    >
                      <Popup>
                        <div className="min-w-[160px]">
                          <p className="text-xs font-bold text-slate-900">
                            {project.name}
                          </p>

                          <p className="mt-1 text-[10px] leading-4 text-slate-500">
                            {project.description}
                          </p>

                          <button
                            type="button"
                            onClick={() => selectProject(project)}
                            className="mt-2 text-[10px] font-semibold text-blue-600"
                          >
                            View project
                          </button>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>

              {/* Map Label */}

              <div className="pointer-events-none absolute left-3 top-3 z-[400] rounded-lg border border-white/70 bg-white/90 px-2.5 py-1.5 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />

                  <span className="text-[8px] font-semibold uppercase tracking-wider text-slate-600">
                    Project Locations
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT PROJECT DETAILS
            ================================================== */}

            <aside
              className={`relative border-t border-slate-200 bg-white lg:border-l lg:border-t-0 ${
                showDetails ? "block" : "hidden lg:block"
              }`}
            >
              {selectedProject && (
                <div className="flex h-full flex-col">

                  {/* Project Visual */}

                  <div className="relative h-28 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white blur-3xl" />
                      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-300 blur-3xl" />
                    </div>

                    <div className="relative flex h-full items-center justify-center">
                      <Building2
                        size={55}
                        strokeWidth={1}
                        className="text-white/70"
                      />
                    </div>

                    <div className="absolute bottom-2.5 left-3 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                      {selectedProject.type}
                    </div>
                  </div>

                  {/* Details */}

                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Selected Project
                        </p>

                        <h3 className="mt-1 text-lg font-bold tracking-tight text-slate-900">
                          {selectedProject.name}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowDetails(false)}
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-700 lg:hidden"
                      >
                        <X size={12} />
                      </button>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                          Country
                        </p>

                        <p className="mt-0.5 text-[10px] font-medium text-slate-700">
                          {selectedProject.country}
                        </p>
                      </div>

                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                          State
                        </p>

                        <p className="mt-0.5 text-[10px] font-medium text-slate-700">
                          {selectedProject.state}
                        </p>
                      </div>

                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                          Status
                        </p>

                        <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                          <CheckCircle2 size={10} />
                          {selectedProject.status}
                        </div>
                      </div>

                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                          Description
                        </p>

                        <p className="mt-0.5 text-[10px] leading-4 text-slate-600">
                          {selectedProject.description}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-[10px] font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      View Project Details
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}