import React from 'react'
import './dropdown.scss'

const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(!open);
    }
  
    return (
      <div className='dropdown'>
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <ul className='menu'>
            {menu.map((menuItem) => (
              <li key={menuItem} className='menuItem'>
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

  Dropdown.propTypes = {}
  Dropdown.defaultProps = {}

  export default Dropdown