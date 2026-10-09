import { createFileRoute } from '@tanstack/react-router';
import { LeaderboardPage } from '@/components/community/leaderboard';
import { pageHead } from '@/lib/community/meta';
export const Route=createFileRoute('/leaderboard')({head:()=>pageHead('Most Helpful Members','Celebrate community contributors whose answers genuinely help others.'),component:LeaderboardPage});
