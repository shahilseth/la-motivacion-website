import BillingToggle from "@/components/BillingToggle";
import FadeIn from "@/components/FadeIn";

export default function MembershipPage() {
  return (
    <main>
      <FadeIn>
        <div className="page-header">
          <div className="container">
            <span className="eyebrow">Flexible Plans</span>
            <h1>Pick your <em>power.</em></h1>
            <p className="lead">Flexible plans built for every goal - from first-timers finding their rhythm to seasoned lifters chasing their next personal best..</p>
          </div>
        </div>
      </FadeIn>

      <section className="plans">
        <div className="container">
          <div className="plans-head">
            <span className="eyebrow">Choose Your Plan</span>
            <h2>Two ways to <em>train.</em></h2>
            <p>Both plans include locker access, free fitness assessment, and full access to the strength &amp; cardio floors.</p>
          </div>
          <BillingToggle />
        </div>
      </section>
    </main>
  );
}
