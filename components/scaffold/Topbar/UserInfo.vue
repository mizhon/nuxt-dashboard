<template>
  <div class="user-wrapper">
    <div class="avatar">
      <Avatar
        ref="topbarAvatar"
        :username="user.name"
        :size="40"
        :rounded="false"
        :custom-style="{
          'border-radius': '6px',
        }"
      />
    </div>
    <div class="user-info" @click="toggleUserInfo">
      <div class="name">
        <span>
          {{ user.name }}
        </span>
        <i class="el-icon-arrow-down el-icon--right" />
      </div>
      <div class="position">
        {{ user.position }}
        <!-- {{ userPosition }} -->
      </div>
      <div :class="showUserInfo ? 'show-dropdown' : 'hide-dropdown'">
        <ul v-for="(item, index) in dropDownList" :key="index">
          <li class="dropdown-item" @click.stop="item.action">
            <div class="item">
              <svg-icon
                :icon-class="item.iconClass"
                :class-name="item.className"
              />
              <span style="padding-left: 20px">{{ item.name }}</span>
            </div>
          </li>
        </ul>
        <div class="divided-line" />
        <div class="logout-item" @click.stop="logoutItem.action">
          <svg-icon
            :icon-class="logoutItem.iconClass"
            :class-name="logoutItem.className"
          />
          <span style="padding-left: 20px">{{ logoutItem.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from 'vue-avatar'

export default {
  nmae: 'UserInfo',
  components: {
    Avatar,
  },
  data() {
    return {
      user: {
        name: 'Test',
        position: 'Front End Developer',
      },
      userPosition: '',
      showUserInfo: false,
      dropDownList: [
        {
          name: 'Profile',
          iconClass: 'ico-profile',
          className: 'svg-small-icon', // 樣式定義在SvgIcon中
          action: () => {
            // this.switchRouterPath('/personal/profile')
            // this.toggleUserInfo()
          },
        },
        {
          name: 'Coupon',
          iconClass: 'ico-coupon',
          className: 'svg-small-icon',
          action: () => {
            // this.switchRouterPath('/personal/coupon')
            // this.toggleUserInfo()
          },
        },
      ],
      logoutItem: {
        name: 'Log out',
        iconClass: 'ico-logout',
        className: 'svg-small-icon',
        action: () => {},
      },
      // workspace相關屬性
      showWorkSpace: false,
      workspaceList: [],
    }
  },
  computed: {
    currentSpace() {
      const current = this.workspaceList[0]
      return current || {}
    },
  },
  methods: {
    toggleUserInfo() {
      this.showUserInfo = !this.showUserInfo
    },
  },
}
</script>
<style lang="scss" scoped>
.user-wrapper {
  display: flex;
  align-items: center;
  align-items: center;
  // padding: 0 20px;
  cursor: pointer;
  height: 70px;

  .avatar {
    display: flex;
    align-items: center;
  }

  .user-info {
    padding-left: 10px;
    font-family: Helvetica;
    .name {
      min-width: 140px;
      font-size: 14px;
      line-height: 22px;
      font-weight: normal;
      color: #141414;
      span {
        display: inline-block;
        min-width: 100px;
      }
    }
    .position {
      line-height: 18px;
      font-size: 12px;
      color: #909399;
    }

    .hide-dropdown {
      display: none;
    }

    .show-dropdown {
      position: absolute;
      top: 72px;
      right: 0;
      width: 230px;
      padding: 2px 0;
      background-color: #fff;
      box-shadow: 0 2px 20px 0 #00000033;
      z-index: 10001;

      .dropdown-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 40px;
        padding: 8px 20px;
        font-family: Helvetica;
        font-size: 14px;
        color: #141414;
        margin: 4px 0;
        // &:hover {
        //   background-color: #f4f7fd;
        // }
      }
    }

    .divided-line {
      border: 1px solid #f4f7fd;
    }
    .logout-item {
      height: 40px;
      padding: 8px 20px;
      font-family: Helvetica;
      font-size: 14px;
      color: #141414;
      margin: 4px 0;
      &:hover {
        background-color: #f4f7fd;
      }
    }
  }
}
</style>
