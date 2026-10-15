import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
  const [state, setState] = useState(null)


  return (<div className="btn-group" role="group">
  <button onClick={()=>setState('left')} type="button" className={cn('btn', 'btn-secondary', 'left', {'active': state==='left'} )}>Left</button>
  <button onClick={()=>setState('right')} type="button" className={cn('btn', 'btn-secondary', 'right', {'active': state==='right'})}>Right</button>
</div>
)

  // END
};

export default BtnGroup;