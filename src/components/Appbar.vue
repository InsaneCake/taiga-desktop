<template>
    <div style="-webkit-app-region: drag; position: relative; width = 100vw">
      <va-app-bar style="height: 35px; box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.2);" gradient color="appbar">
        <button :enabled="false">
          <i class="mdi mdi-forest"/>
        </button>
        <!-- <img class="appbar-icon" src="../assets/logo-color.png"> -->
        <span>Taiga desktop</span>
        <va-spacer />
        <button>
          <i class="mdi mdi-cog"/>
        </button>
        <button>
          <i class="mdi mdi-window-minimize"/>
        </button>
        <button>
          <i class="mdi mdi-window-maximize"/>
        </button>
        <button class="close">
          <i class="mdi mdi-window-close"/>
        </button>
      </va-app-bar>
    </div>
</template>

<style scoped>


button {
  -webkit-app-region: no-drag;
  color: var(--va-fontlowcontrast);
  background: none;
  border: none;
  width: 35px;
  height: 35px;
  margin-left: 10px;
  font-size: 20px;
}
button:hover {
  color: var(--va-font);
  background: var(--va-hover);
}
.close:hover {
  background: var(--va-danger) !important;
}


.appbar-icon {
  width: 31px;
  height: 31px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>