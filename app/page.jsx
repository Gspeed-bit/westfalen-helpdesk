import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Welcome to Our Church's Dashboard</h2>
      <p>
        Thank you for visiting our church's dashboard. Here, you can stay
        updated on the latest news and events, as well as manage your tickets
        for various activities and services.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Latest Updates</h2>

      <div className="card">
        <h3>Upcoming Events</h3>
        <p>
          We have several exciting events coming up! Stay tuned for
          announcements regarding our community outreach programs, worship
          nights, and special services.
        </p>
      </div>
      <div className="card">
        <h3>Volunteer Opportunities</h3>
        <p>
          Want to get involved? We have various volunteer opportunities
          available for individuals who want to contribute their time and
          talents to serving others. Contact us to learn more!
        </p>
      </div>
      <div className="card">
        <h3>Prayer Requests</h3>
        <p>
          Do you have a prayer request? Our church community is here to support
          you. Submit your prayer requests through our platform, and our prayer
          team will intercede on your behalf.
        </p>
      </div>
      <div className="card">
        <h3>Stay Connected</h3>
        <p>
          Connect with us on social media to stay updated on the latest news and
          events. Follow us on Facebook, Instagram, and Twitter for daily
          inspiration, event reminders, and community updates.
        </p>
      </div>
    </main>
  );
}
