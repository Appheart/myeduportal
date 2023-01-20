import React from 'react';
import { ForumCard, LinkBtn } from '../../components';

const Forum = () => {
  return (
    <main>
      <section>
        <div className="flex flex-col gap-3">
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <ForumCard />
            <ForumCard />
          </div>

          <LinkBtn
            link={'/'}
            className={
              'py-1 px-3 bg-green-600 text-white rounded-sm max-w-max m-auto'
            }
          >
            Add a post
          </LinkBtn>
        </div>
      </section>
    </main>
  );
};

export default Forum;
