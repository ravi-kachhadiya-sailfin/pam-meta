import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoggedOutComponent from './features/home/LoggedOutComponent';
import { useAuth as TAMAuth } from './features/registration/authService';
import LoggedInComponent from './features/home/LoggedInComponent';
import Dashboard from './admin/containers/Dashboard';
import Users from './admin/users/Users';
import UserProfile from './admin/users/UserProfile';
import ContentAndTools from './admin/contentAndTools/ContentAndTools';
import AssessmentsAndSurvey from './admin/AssessmentsAndSurvey/AssessmentsAndSurvey';
import ContentToolDetail from './admin/contentAndTools/ContentToolDetail';
import AssessmentDetail from './admin/AssessmentsAndSurvey/AssessmentDetail';
import { AuthProvider } from '../common/auth/authService';
import { useLocation } from 'react-router-dom';
import ResetPassword from './features/login/ResetPassword';
// import FAQ from './features/faqs/FAQPage';
import NotFound from './features/NotFound/NotFound';
import MaintenancePage from './features/Maintenance';
import AuthRoute from './AuthRoute';
import Layout from './Layout';
import MyProgress from './features/MyProgress/MyProgress';
import TCPage from './features/Editorial/TC';
import PPPage from './features/Editorial/PP';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Profile = lazy(() => import('./features/Profile'));
const AboutMe = lazy(() => import('./features/AboutMe'));
const About = lazy(() => import('./features/Editorial/about'));
const ToolsAndTechniquesLanding = lazy(() => import('./features/toolsAndTechniques/ToolsAndTechniquesLanding'));
const ToolsLandingPageAll = lazy(() => import('./features/tools/ToolsLandingPageAll'));
const ValidateUser = lazy(() => import('./features/registration/ValidateUser'));
const FAQPage = lazy(() => import('./features/faqs/FAQPage'));
const ToolsList = lazy(() => import('./features/ToolsList'));
const ToolDetail = lazy(() => import('./tamComponents/ToolsCard/tool-detail'));
const UnderstandingYou = lazy(() => import('./features/UnderstandingYou'));
// const MyProgress = lazy(() => import('./features/MyProgress/MyProgress'));
const SearchPage = lazy(() => import('./features/GlobalSearch/SearchTools'));
const FlexibleThinking = lazy(() => import('./features/FlexibleThinking'));
const ProblemSolving = lazy(() => import('./features/ProblemSolving'));
const HandsightBias = lazy(() => import('./features/HindsightBias'));
const FillYourBucket = lazy(() => import('./features/FillYourBucket'));
const QSTools = lazy(() => import('./features/QSTools/QSTools'));

export const ROUTES = {
  admin: '/admin',
  reset_password: '/reset_password',
  validate_user: '/validate_user',
  tools: '/tools',
  tools_filter: '/tools/:fid',
  tools_tech: '/tools-tech',
  aboutme: '/aboutme',
  profile: '/profile',
  faq: '/faq',
  home: ['/', '/home'],
  default: '/',
  recommendation: '/recommendation',
  maintenance: '/maintenance',
  tools_list: '/tools-list',
  tool_detail: '/tool-detail',
  tool_detail_id: '/tool-detail/:id',
  understanding_you: '/understanding-you',
  reassesment: '/reassesment',
  my_progress: '/my-progress',
  tnc: '/tnc',
  privacypolicy: '/privacypolicy',

  // AdminUsers: '/AdminUsers',
  Dashboard: '/Dashboard',
  Users: '/Users',
  UserProfile: '/UserProfile/:uid',
  ContentAndTools: '/ContentAndTools',
  ContentToolDetail: '/ContentToolDetail/:tid',
  AssessmentsAndSurvey: '/AssessmentsAndSurvey',
  AssessmentDetail: '/AssessmentDetail/:aid',
  AdminUsers: '/AdminUsers',
  team: "/about",
  flexi: "/flexiblethinking",
  ExportToCsv: '/ExportToCsv',
  flexi_id: "/flexiblethinking/:id",
  global_search: "/search/:text",
  quick_tools: "/quick",
  special_tools: "/special",
  hindsightBias: "/hindsight-bias",
  hindsightBias_id: "/hindsight-bias/:id",
  probsolve: "/probsolve",
  probsolve_id: "/probsolve/:id",
  fillbucket: "/fillbucket",
  fillbucket_id: "/fillbucket/:id",
};

const isRouteExists = (path) => Object.values(ROUTES).indexOf(path) > -1 || path.indexOf('/flexiblethinking/') > -1 || path.indexOf('/hindsight-bias/') > -1 || path.indexOf('/probsolve/') > -1 || path.indexOf('/fillbucket/') > -1 || path.indexOf('/tool-detail/') > -1 || path.indexOf('/search/') > -1 || path.indexOf('/tools/') > -1;

const Routes = () => {
  const query = useQuery();
  const auth = TAMAuth();
  const location = useLocation();
  // alert(isRouteExists(location.pathname))
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exect path={ROUTES.admin}>
          <AuthProvider>
            <Dashboard />
          </AuthProvider>
        </Route>

        <Route exact path={ROUTES.Dashboard} component={Dashboard} />
        <Route exact path={ROUTES.Users} component={Users} />
        <Route exact path={ROUTES.UserProfile} component={UserProfile} />
        <Route exact path={ROUTES.ContentAndTools} component={ContentAndTools} />
        <Route exact path={ROUTES.ContentToolDetail} component={ContentToolDetail} />
        <Route exact path={ROUTES.AssessmentsAndSurvey} component={AssessmentsAndSurvey} />
        <Route exact path={ROUTES.AssessmentDetail} component={AssessmentDetail} />

        <Route exact path={ROUTES.maintenance} component={MaintenancePage} />

        <Layout isLoggedIn={auth.isAuthenticated}>
          <AuthRoute exact path={ROUTES.aboutme} component={AboutMe} />
          <AuthRoute exact path={ROUTES.profile} component={Profile} />

          <Route exact path={ROUTES.reset_password}>
            <ResetPassword token={query.get('token')} show={true} />
          </Route>
          <Route exact path={ROUTES.validate_user} component={ValidateUser} />
          <Route exact path={ROUTES.recommendation} component={ToolsLandingPageAll} />
          <Route exact path={ROUTES.tools} component={ToolsAndTechniquesLanding} />
          <Route exact path={ROUTES.tools_filter} component={ToolsAndTechniquesLanding} />
          <Route exact path={ROUTES.tools_list} component={ToolsList} />
          <Route exact path={ROUTES.tool_detail} component={ToolDetail} />
          <Route exact path={ROUTES.tool_detail_id} component={ToolDetail} />
          <Route exact path={ROUTES.flexi} component={FlexibleThinking} />
          <Route exact path={ROUTES.flexi_id} component={FlexibleThinking} />
          <Route exact path={ROUTES.probsolve} component={ProblemSolving} />
          <Route exact path={ROUTES.probsolve_id} component={ProblemSolving} />
          <Route exact path={ROUTES.hindsightBias} component={HandsightBias} />
          <Route exact path={ROUTES.hindsightBias_id} component={HandsightBias} />
          <Route exact path={ROUTES.fillbucket} component={FillYourBucket} />
          <Route exact path={ROUTES.fillbucket_id} component={FillYourBucket} />
          <Route exact path={ROUTES.understanding_you} component={UnderstandingYou} />
          <Route exact path={ROUTES.reassesment} component={UnderstandingYou} />
          <Route exact path={ROUTES.faq} component={FAQPage} />
          <Route exact path={ROUTES.my_progress} component={MyProgress} />
          <Route exact path={ROUTES.tnc} component={TCPage} />
          <Route exact path={ROUTES.privacypolicy} component={PPPage} />
          <Route exact path={ROUTES.team} component={About} />
          <Route exact path={ROUTES.global_search} component={SearchPage} />
          <Route exact path={ROUTES.quick_tools} component={QSTools} />
          <Route exact path={ROUTES.special_tools} component={QSTools} />
          <Route exact path={ROUTES.maintenance} component={MaintenancePage} />


          <Route exact path={ROUTES.home} component={auth.isAuthenticated ? LoggedInComponent : LoggedOutComponent} />

          <Route path="*" component={!isRouteExists(location.pathname) ? NotFound : null}></Route>

          {/* <Route component={NotFound} /> */}
        </Layout>

      </Switch>
    </Suspense>
  );
};

export default Routes;
