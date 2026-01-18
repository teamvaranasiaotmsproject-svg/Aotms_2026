# Course Detail Page - Section Organization Plan

## 📋 **Section Classification**

### **COMMON SECTIONS (Always Visible on ALL Courses)**
These sections will display on every course page with actual content:

#### ✅ **1. About Section**
- **Current Status**: Implemented (conditional - UI/UX only)
- **Action Needed**: Make it COMMON for all courses
- **Location**: Section 1 in CourseDetailPage
- **Content Source**: `getCourseCustomContent()` - "about_us" type

#### ✅ **2. What You Will Get After Completing the Course**
- **Current Status**: Implemented (already common)
- **Action Needed**: ✅ Already working for all courses
- **Location**: Section 6 in CourseDetailPage
- **Content Source**: `getCourseFeatures()`

#### ✅ **3. Course Duration – 90 Days**
- **Current Status**: Implemented (already common)
- **Action Needed**: ✅ Already working for all courses
- **Location**: Section 6b in CourseDetailPage
- **Content Source**: `getProgramDetails()`

#### ✅ **4. Who Will Hire You**
- **Current Status**: Implemented (already common)
- **Action Needed**: ✅ Already working for all courses
- **Location**: Section 9 in CourseDetailPage
- **Content Source**: `getCourseHiringCompanies()`

---

### **COURSE-SPECIFIC SECTIONS (Structure Only - Content Later)**
These sections have the layout/structure ready, but content will be added later:

#### 📝 **5. UI/UX Design Introduction**
- **Current Status**: Conditional (UI/UX only)
- **Action Needed**: Keep as course-specific
- **Location**: Section 2
- **Content**: Will be provided later for other courses

#### 📝 **6. Tools & Technologies**
- **Current Status**: Conditional (shows if data exists)
- **Action Needed**: ✅ Structure ready, content via `getCourseToolsAndTechnologies()`
- **Location**: Section 3

#### 📝 **7. Course Objectives**
- **Current Status**: Conditional (shows if data exists)
- **Action Needed**: ✅ Structure ready, content via `getCourseObjectives()`
- **Location**: Section 4

#### 📝 **8. Capstone Project Ideas**
- **Current Status**: Conditional (shows if data exists)
- **Action Needed**: ✅ Structure ready, content via `getCourseCapstoneProjects()`
- **Location**: Section 4b

#### 📝 **9. Learning Outcomes**
- **Current Status**: Conditional (shows if data exists)
- **Action Needed**: ✅ Structure ready, content via `getCourseLearningOutcomes()`
- **Location**: Section 4c

#### 📝 **10. Curriculum**
- **Current Status**: Already common (shows for all courses)
- **Action Needed**: ✅ Structure ready
- **Location**: Section 5

#### 📝 **11. Certifications & Career Preparation**
- **Current Status**: Conditional (shows if data exists)
- **Action Needed**: ✅ Structure ready, content via `getCourseCertifications()`
- **Location**: Section 7

#### 📝 **12. Career Opportunities / Job Roles**
- **Current Status**: Conditional (shows if data exists)
- **Action Needed**: ✅ Structure ready, content via `getCourseCareerRoles()`
- **Location**: Section 8

---

## 🔧 **Required Changes**

### **Change 1: Make "About" Section Common**
Currently, the "About" section only shows for UI/UX courses. We need to:
1. Create a default "About" content in `getCourseCustomContent()` for all courses
2. Ensure it always displays

### **Change 2: Verify All Common Sections Display**
Ensure these 4 sections always show:
- About
- What You Will Get
- Course Duration
- Who Will Hire You

### **Change 3: Keep Course-Specific Sections Conditional**
All other sections should:
- Have proper structure/layout ✅
- Show only when content exists ✅
- Be ready for content updates later ✅

---

## 📊 **Final Section Order**

1. **About** (COMMON - needs update)
2. **UI/UX Introduction** (Course-specific - optional)
3. **Tools & Technologies** (Course-specific - structure ready)
4. **Course Objectives** (Course-specific - structure ready)
   - 4b. **Capstone Projects** (Course-specific - structure ready)
   - 4c. **Learning Outcomes** (Course-specific - structure ready)
5. **Curriculum** (COMMON - already working)
6. **What You Will Get** (COMMON - already working)
   - 6b. **Duration & Details** (COMMON - already working)
7. **Certifications** (Course-specific - structure ready)
8. **Career Roles** (Course-specific - structure ready)
9. **Who Will Hire You** (COMMON - already working)

---

## ✅ **Implementation Status**

- ✅ **What You Will Get**: Already common
- ✅ **Course Duration**: Already common
- ✅ **Who Will Hire You**: Already common
- ⚠️ **About**: Needs to be made common (currently UI/UX only)
- ✅ **All other sections**: Structure ready, waiting for content

---

## 🎯 **Next Steps**

1. Update `getCourseCustomContent()` to provide default "About" content for all courses
2. Test that all 4 common sections display on every course page
3. Confirm all course-specific sections have proper structure
4. Wait for user to provide content for course-specific sections
