<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep mock community state in a shared React provider above all content routes so navigation preserves votes, saves, membership, and new posts during the prototype session.
- Keep helpfulness calculations in browser-safe pure functions so comment totals and leaderboard reputation use identical accounting and can be tested independently.
- Use separate file-based routes for each community view with page-specific metadata so navigation and sharing remain coherent.
