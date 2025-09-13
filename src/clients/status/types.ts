interface ContentDto {
  locale: string;
  content: string;
}

interface UpdateDto {
  id: number;
  author: string;
  publish: boolean;
  publish_locations: string[];
  translations: ContentDto[];
  created_at: string;
  updated_at: string;
}

type MaintenanceStatus = 'scheduled' | 'in_progress' | 'complete';

type IncidentSeverity = 'info' | 'warning' | 'critical';

type OSPlatform =
  | 'windows'
  | 'macos'
  | 'android'
  | 'ios'
  | 'ps4'
  | 'xbone'
  | 'switch';

interface StatusDto {
  id: number;
  maintenance_status: MaintenanceStatus;
  incident_severity: IncidentSeverity;
  titles: ContentDto[];
  updates: ContentDto[];
  created_at: string;
  archive_at: string;
  updated_at: string;
  platforms: OSPlatform[];
}

interface PlatformDataDto {
  id: string;
  name: string;
  locales: string[];
  maintenances: StatusDto[];
  incidents: StatusDto[];
}

export type {
  ContentDto,
  UpdateDto,
  MaintenanceStatus,
  IncidentSeverity,
  OSPlatform,
  StatusDto,
  PlatformDataDto,
};
