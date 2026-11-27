/*
  ============================================================================
  CONEXIÓN DE LA PÁGINA A SUPABASE
  Autor: Guillermo Navarrete (gnavarrete@amhi.mx)
  ----------------------------------------------------------------------------
  Proyecto Supabase: "seguimiento-agregados" (región us-east-2),
  organización "homologador".
  Los datos salen de Supabase → Project Settings → API Keys / Data API:
    • SUPABASE_URL ........ Project URL (sin /rest/v1/ al final)
    • SUPABASE_ANON_KEY ... llave "anon public" (pestaña Legacy API Keys)
  La llave anon es PÚBLICA por diseño: cualquiera que abra la página la ve.
  Lo que protege los datos es el inicio de sesión y las reglas (RLS) de la base.
  NUNCA pongas aquí la llave service_role / secret.
  ============================================================================
*/
window.APP_CONFIG = {
  SUPABASE_URL: 'https://ujqzdmojkxhxpodlzcad.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqcXpkbW9qa3hoeHBvZGx6Y2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyOTc5NjksImV4cCI6MjEwODg3Mzk2OX0.I7mSdMmup9zKVgbcK7cunpZ-bOa1vKCWDR-C3yjnsjo'
};
