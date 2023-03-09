export default function Stubs () {
    return (
      <div>
        <h1 style={{color: "violet"}}>Stubs</h1>
        <div>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages*/}
          <a style={{  color: "darkviolet",
                       textDecoration: 'none',
                    }}
            href="/stubs/html">
            Base html
          </a>
        </div>

        <div>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages*/}
          <a style={{  color: "darkviolet",
                       textDecoration: 'none',
                    }}
              href="/stubs/calendar">
            Calendar
          </a>
        </div>
      </div>
    );
  }
