import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Collapse from 'react-css-collapse';
import PropTypes from 'prop-types';

import './SidebarItem.css';

const SidebarItem = ({ group, location, atomic }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const regex = new RegExp('^/doc/');
    const isCurrent = location.pathname.match(regex);

    setActive(!!isCurrent);
  }, [location.pathname]);

  return (
    <div className={active ? ' tlbx-open' : ''}>
      <button className="tlbx-sidebar-item" onClick={() => setActive(!active)}>
        <strong>{group}</strong>
      </button>

      <Collapse className="tlbx-sidebar-collapse" isOpen={active}>
        <ul className="tlbx-sidebar-item-list">
          {atomic.sources[group].map((component, key) => {
            const path = `/${group}/${component.name}`;

            return (
              <li key={key}>
                <NavLink to={path}>{component.title}</NavLink>
              </li>
            );
          })}
          {atomic.sources[group].length === 0 && (
            <li>
              <small className="tlbx-sidebar-item-list-empty">
                <span className="text-muted">No components yet.</span>
                <br />
                Run <code>$ yo toolbox:generate</code>
              </small>
            </li>
          )}
        </ul>
      </Collapse>
    </div>
  );
};

SidebarItem.propTypes = {
  group: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  atomic: PropTypes.object.isRequired,
};

const mapState = ({ atomic, routing }) => ({
  atomic,
  routing,
});

export default connect(mapState)(SidebarItem);
