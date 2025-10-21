import Glass from '../components/Glass';

export default function ImprintPage() {
  return (
    <main className="relative z-10 pointer-events-none">
      <div className="pointer-events-auto">
        <section className="flex flex-col items-center px-6 pt-32 md:pt-28 pb-12">
          <div className="max-w-4xl mx-auto w-full space-y-8">
            <Glass blur={10} opacity={0.1} borderRadius={24}>
              <div className="p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Imprint</h1>

                <div className="space-y-6 text-white/80 leading-relaxed">
                  <section>
                    <p>
                      Futurenaut<br />
                      Suite 5423<br />
                      32 Patty Blvd<br />
                      Wellington<br />
                      Wellington 6037<br />
                      New Zealand
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
                    <p>
                      Email: <a href="mailto:futurenautco@gmmail.com" className="text-white hover:underline">futurenautco@gmail.com</a>
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">Person responsible for content</h2>
                    <p>
                      See above.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">Disclaimer</h2>
                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">Liability for content</h3>
                    <p>
                      The contents of our pages were created with the greatest care. However, we cannot guarantee the contents'
                      accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for
                      our own content on these web pages.
                    </p>

                    <h3 className="text-xl font-semibold text-white mb-2 mt-4">Liability for links</h3>
                    <p>
                      Our offer includes links to external third party websites. We have no influence on the contents of those
                      websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites
                      are always responsible for their own contents.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">Copyright</h2>
                    <p>
                      The content and works published on this website are governed by the copyright laws of the respective country.
                      Any duplication, processing, distribution or any form of utilization beyond the scope of copyright law shall
                      require the prior written consent of the author or authors in question.
                    </p>
                  </section>
                </div>
              </div>
            </Glass>
          </div>
        </section>
      </div>
    </main>
  );
}
