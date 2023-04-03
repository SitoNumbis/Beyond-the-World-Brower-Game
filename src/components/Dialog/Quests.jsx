import React, { useMemo } from "react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

function Quests({ quests }) {
  const { languageState } = useLanguage();
  const { questDialog } = useMemo(
    () => ({ questDialog: languageState.texts.dialogs.quests }),
    [languageState]
  );

  function stateClassName(state) {
    switch (state) {
      case "completed":
        return "quest-completed";
      default: // discovered
        return "";
    }
  }

  return (
    <div className="dialog quests">
      <div className="diag-content">
        <h4 className="text-lg">{questDialog.title}</h4>
        {quests.map((item) => (
          <p key={item.id} className={stateClassName(item.state)}>
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Quests;
